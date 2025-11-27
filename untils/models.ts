export const SUPPORTED_ACCOUNTS = [
    {
        apiKey : process.env['API_KEY_DEEPSEEK'],
        model : 'deepseek-chat-v3-0324',
        name : 'DeepSeek'
    }
]

export type TSupportedAccounts = {
    apiKey : string,
    model : string, 
    name : string
}