import Router from 'koa-router'
import { OpenAiController } from '../controllers/openaiController.js'
import { ChatGPTController } from '../controllers/chatgptController.js'

export const router = new Router()

router.post('/generateImage', async (ctx) => {
  const openaiController = new OpenAiController(ctx)
  await openaiController.generateImage()
})

router.post('/conversation', async (ctx) => {
  const chatgptController = new ChatGPTController(ctx)
  await chatgptController.conversation()
})
