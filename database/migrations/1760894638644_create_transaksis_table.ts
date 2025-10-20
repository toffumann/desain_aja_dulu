import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transaksis'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_proyek')
        .unsigned()
        .references('id')
        .inTable('proyeks')
        .onDelete('CASCADE')
        .notNullable()

      table
        .integer('id_klien')
        .unsigned()
        .references('id')
        .inTable('kliens')
        .onDelete('CASCADE')
        .notNullable()

      table.string('order_id',100).notNullable().unique()
      table.decimal('jumlah', 10,2).notNullable()
      table.string('metode_pembayaran', 50).notNullable().defaultTo('DANA')
      table.enum('status', ['TERTUNDA', 'DIBAYAR', 'GAGAL']).defaultTo('TERTUNDA ').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}