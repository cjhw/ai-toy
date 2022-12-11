import { Configuration, OpenAIApi } from 'openai'

export class OpenAiController {
  constructor(ctx) {
    this.ctx = ctx
    const config = new Configuration({
      apiKey: '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',
    })
    this.openai = new OpenAIApi(config)
  }

  async generateImage() {
    const { prompt } = this.ctx.request.body

    const response = await this.openai.createImage({
      prompt,
      size: '256x256',
      n: 1,
    })

    const imageUrl = response.data.data[0].url

    this.ctx.body = {
      status: 'ok',
      data: imageUrl,
    }
  }
}
