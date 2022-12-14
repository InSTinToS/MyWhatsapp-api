import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { CreateContactInput } from './dto/create-contact.input'
import { UpdateContactInput } from './dto/update-contact.input'
import { Contact } from './entities/contact.entity'
import { InjectModel } from '@nestjs/mongoose'
import { create, Whatsapp } from 'venom-bot'

const buttons = [
  { buttonText: { displayText: 'Sim' } },
  { buttonText: { displayText: 'Com certeza' } }
]

const asyncTimeout = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contact')
    private readonly contactModel: Model<Contact>
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

  async sendMessage({ id, message }: { id: Contact['id']; message: string }) {
    try {
      const client = await create({
        session: 'my-session',
        multidevice: false
      })

      // //? Repetir
      // await client.onMessage(async message => {
      //   await client.sendText('@c.us', message.body)
      // })

      // //? Enviar varias mensagens em um intervalo
      // for (let i = 0; i < 10; i++) {
      //   await client.sendText('@c.us', '🌹')

      //   await asyncTimeout(5000)
      // }
    } catch (error) {
      console.log(error)
    }

    return await this.findOne(id)
  }
}
