import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import Proyek from './proyek.js'
import Transaksi from './transaksi.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Klien extends compose (BaseModel,AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string

  @column()
  declare email: string

  @column({serializeAs: null}) 
  declare password: string

  @column()
  declare telepon: number | null

  @hasMany(() => Proyek, {foreignKey: 'id_klien'})
  declare proyeks: HasMany <typeof Proyek>

  @hasMany(() => Transaksi, {foreignKey: 'id_klien'})
  declare transaksi: HasMany<typeof Transaksi>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}