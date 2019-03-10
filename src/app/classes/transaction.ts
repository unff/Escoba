export class Transaction {
  public key: string
  public type: string
  public date: string
  public content: string
  public accountKey: string
  public adjustment: number
  public afterBalance: number

  constructor(key: string, type: string,
              date: string, content: string, accountKey: string,
              adjustment: number, afterBalance: number) {
      this.key = key
      this.type = type
      this.date = date
      this.content = content
      this.accountKey = accountKey
      this.adjustment = adjustment
      this.afterBalance = afterBalance
  }

}
