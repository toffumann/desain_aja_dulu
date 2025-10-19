import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Proyek from './proyek.js'

export default class Layanan extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama_layanan: string

  @column()
  declare deskripsi: string | null

  @column()
  declare harga: number

  @hasMany(() => Proyek, {foreignKey: 'id_layanan'})
  declare proyeks: HasMany <typeof Proyek>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}