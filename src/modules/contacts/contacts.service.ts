import { CreateContactInput } from './dto/create-contact.input'
import { UpdateContactInput } from './dto/update-contact.input'
import { Contact } from './entities/contact.entity'

import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'
import { Client } from 'whatsapp-web.js'

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contact')
    private readonly contactModel: Model<Contact>,

    @Inject('WhatsAppClient')
    private whatsClient: Client
  ) {}

  async create(createContactInput: CreateContactInput) {
    const contact = new Contact()

    Object.assign(contact, createContactInput)

    const createdContact = new this.contactModel(contact)

    return createdContact.save()
  }

  async findAll() {
    return await this.contactModel.find().exec()
  }

  async findOne(id: Contact['id']) {
    return await this.contactModel.findById(id).exec()
  }

  async update({ id, ...updateContactInput }: UpdateContactInput) {
    return await this.contactModel
      .updateOne({ _id: id }, updateContactInput)
      .exec()
  }

  async remove(id: Contact['id']) {
    return await this.contactModel.remove({ id })
  }

  async sendMessage() {}
}
