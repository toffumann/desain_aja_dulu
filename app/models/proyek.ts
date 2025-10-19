import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Klien from './klien.js'
import Layanan from './layanan.js'

export default class Proyek extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_klien: number

  @column()
  declare id_layanan: number

  @column()
  declare catatan_klien: string | null

  @column()
  declare status_proyek: 'Baru' | 'Proses' | 'Revisi' | 'Selesai' | 'batal'

  @column.date()
  declare tanggal_mulai: DateTime

  @belongsTo(() => Klien, {foreignKey: 'id_klien'})
  declare klien: BelongsTo <typeof Klien>

  @belongsTo(() => Layanan, {foreignKey: 'id_layanan'})
  declare layanan: BelongsTo <typeof Layanan>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}