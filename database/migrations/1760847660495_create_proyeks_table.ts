import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'proyeks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_klien').unsigned().references('id').inTable('kliens').onDelete('CASCADE').notNullable()
      table.integer('id_layanan').unsigned().references('id').inTable('layanans').notNullable()
      table.text('catatan_klien').nullable()
      table.enum('status_proyek', ['Baru', 'Proses', 'Revisi', 'Selesai', 'Batal']).defaultTo('Baru').notNullable()
      table.date('tanggal_mulai').notNullable()

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}