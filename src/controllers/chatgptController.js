import { ChatGPTAPI } from 'chatgpt'

export class ChatGPTController {
  constructor(ctx) {
    this.ctx = ctx
    this.api = new ChatGPTAPI({
      // token24小时就失效了
      sessionToken: `eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..aS1wwOAjMj4TCYc_.t4pdAbYCPViJNRKjc0vZTjXf--UE_JcvzGSnprynN-WZF-kflX9kMMAxtSyG7L2jOnYhLVXFHZhzNLuIRdjLEqOXFSYhQzfI_lqLZfXIhLbfpI-kFSLaE13apM-r5p0SlyXZYwz5CxIRCWl0KyTwkN41DdL2mSnNkH9zciNyy3zu3X_DmXUvPv7bQDcPBuMDbzMgd2aXxkWOZ0hAeweq97TxAcgje1KCb-7mefvbU2ZHVP2EXRjSYJfDDxy0fLfQ35Xe5D3n-rElGol3B71Rdo0wsx7dxw_jkQfVKAfZShVZlLYSYjvxMVguOctNccp9mpnOOIugU2Ci5qQX9t_c0YIHNuNMLbBBLRjW1UNbK7QpHlBWmiXvNlq892Cg3GsLGJcs40R8da_MUsWzbtBEOHtowry7BPpn__K_aPvI70itKki06QBG9yiW93IF0cdhcbV2pufhNaPMVFbjdg8_bHMLXIXLLViBUR79sxc3LvHUU9_neHUt9rH_I2E1ZbMLqBPVZGOgMYMdY3XKroUYVdzVzrtIdVOc86yQmBC_LCPe7qRd5NJjwqtI5Vd6XW2N2nKJvUlizTTokf2R4oQd8exAqRA0UHyQBRnfaeS4VW3i_V_EWc_aR6ogMNdO6ZFarfv3O0AGzTdo7XDPjoY8NWTsUsyyk8ZkavYpAH6Ws1hWoO3tZNRUSImCdpNcsbDUHJBrQ6qT-QiRLvGPwQ3-tjSkTeMR-YtpW8Y7r06qTOJ1PElS4jv4Oob0Rr5ftfk8VXwIlWkaPiBPn2SZod0wWfwiEMmhBrBY6eqpWVORQ_Ca5f9i4kJmC5Mnm7sKEyxxL-tjtLECqfHiSYN2wzlJSqMZvkwD9QUtTCtWXJsXIxKqiVhVqkJIL9wLxke11USXLBZPHIP5HuYpATsMlMXPMJ2zEfB3olRlIXjxFGp_ixe2RzJblYUXwt-MMgto_CTEtP4_husi47ZxCS9GPa_BBcCMTehZV52Z2-3gqDOrzrk_Yr2Ei2J2G5Z8s2kJN847NnuJldv_wQ82WItSoc36o6c0l8HjC1c2Z7eNlVQhwceYbo77Aw4msSTDrQ8xx78II3oRMP7ok6ktVVOaiUSmUnQS2QA0dFLLHT_iGRpYN4JgtW1ZknKEStkWel7PAUV00EZRnCS6DuULdnzJsXRYSc5IM4wN5O2MqVAZVnwV312D3MAOmNNKnC0rsOHRzud2sEM7gbtZV_FE71owj-NTDqHI3B4snl6td-qcg-Ly2RwvUwZy-Nbd1F8_1Q1EsRAt5geScVnbN9jDUce6J5LOstTOgYyUF5VBK1zbS5DH2qycMX0SkTL-eZWpXVoJQQuC3LY8vPrJbkOx0XA5B745-8Jwj-4HdJQ9ggEVFcBcpVzWYd92hKyypqkeze0yxDFBNcMV9_p4C6pF-Ytrcvp1Opyq9orEVmFtiwxx7fMdhdLtzDTYwGF4ri2RDAiesAxOYGr68f1kXJE2M0PnQY7_UNwg1jNLkUtxxI-AbEShZ0ZKw0F1sxhri6RAQ3ZDQgZ4_IO2ygLer7pcM9cLLypBNU2kuQrFd153SuWpH_ZhEG1wqCa56fTNc7S7zfmt_UYvzydNBOzVDrLM_TJ11cj1muvpDUicdS2VpAT-lNkpG0kJV7Vt7Z7RdTDPMOCpmrGUzyWLCZxNn7zPrW30JcaLhyjYu-jcpIzsJACDITWbo2jIaI3nRNIyNPeC_QQrQMKYcaISgbbe2Nz4vrmwkeZAHmQxPvr4VaToSn96XKFetCDPNpnltVRZ2mauexjog2WNlXg7lyHRbFOPjtYbwD-AzHhRDTW4rSq5in4i6UjCYoZCtVpGt1dHNaFjcgtH3SPSGzhb0DhIJ9TvqJLQC4vQr5msefuaKpSIlBb1bbXfbDMf5CVkzFZVZ6dYG3yAixIZ5dNQ_T4EL_V-QrZ--WZBcxUvyaWmxsEgABpESjrl0DG-S98GyfaePENyyj-dRHbpWvSFv6a2M0Px7OalDww05dwbIzwi-cDwlZG553pHN0GkDts7lnOISHJ9x0gV0rOH9DDCyIz1To3CaIMqQX5m8p-t7994kou_mJjWpnr1CqviBPPBYhQdyyn_CVuMA-LBGbf3QaISSrqArZBtAtAls41IDnyz93rKPKcROoFavRasRwEp6fEscqBdZb_FYRnwfUVOwHqkKyzyC_wwg1MY0OYnTfGagIEvjYXd38m1gnNdzbp3ajPdferJSSToYXkTetnG93EH5ACIwggV3zB9i3zIHWnXgZA54pVi6k-IuCw8vYlK_COkQxoFsQNGsJm4QV5v0lxZXXr2c9UkUdeBEWcs2NrH35CKlQ.Cboz3ph4hB78GWFdXEwB4g`,
    })
  }

  async conversation() {
    const { question } = this.ctx.request.body
    const answer = await this.api.sendMessage(question)
    console.log(question)
    this.ctx.body = {
      status: 'ok',
      data: answer,
    }
  }
}
