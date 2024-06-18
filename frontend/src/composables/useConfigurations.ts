import { reactive } from 'vue'

type Configuration = {
  prompt: string
  language: string
  tone: string
  file: File | null
}

const configurations = reactive<Configuration>({
  prompt: '',
  language: 'English',
  tone: 'Neutral',
  file: null
})

const setPrompt = (prompt: string) => {
  configurations.prompt = prompt
}

const setLanguage = (language: string) => {
  configurations.language = language
}

const setTone = (tone: string) => {
  configurations.tone = tone
}

const setFile = (file: File) => {
  configurations.file = file
}

export const useConfigurations = () => {
  return {
    configurations,
    setPrompt,
    setLanguage,
    setTone,
    setFile
  }
}
