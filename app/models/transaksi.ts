import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Proyek from './proyek.js'
import Klien from './klien.js'

export default class Transaksi extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_proyek: number

  @column()
  declare id_klien: number

  @column()
  declare order_id: string

  @column()
  declare jumlah: number

  @column()
  declare metode_pembayaran: string

  @column()
  declare status: 'TERTUNDA' | 'DIBAYAR' | 'GAGAL'

  @belongsTo(() => Proyek, {foreignKey: 'id_proyek'})
  declare proyek: BelongsTo<typeof Proyek>

  @belongsTo(() => Klien, {foreignKey: 'id_klien'})
  declare klien: BelongsTo<typeof Klien>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}