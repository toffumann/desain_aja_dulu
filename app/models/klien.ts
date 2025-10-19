import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import Proyek from './proyek.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Klien extends compose (BaseModel,AuthFinder) {
  static $fillable: string[] = ['nama', 'telepon', 'email', 'password']
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string | null

  @column()
  declare email: string

  @column({serializeAs: null}) 
  declare password: string

  @column()
  declare telepon: string | null

  @hasMany(() => Proyek, {foreignKey: 'id_klien'})
  declare proyeks: HasMany <typeof Proyek>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}