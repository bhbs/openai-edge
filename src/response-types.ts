import {
  CreateAnswerResponse,
  CreateChatCompletionResponse,
  CreateClassificationResponse,
  CreateCompletionResponse,
  CreateEditResponse,
  CreateEmbeddingResponse,
  CreateModerationResponse,
  CreateSearchResponse,
  CreateTranscriptionResponse,
  CreateTranslationResponse,
  DeleteFileResponse,
  DeleteModelResponse,
  Engine,
  FineTune,
  ImagesResponse,
  ListEnginesResponse,
  ListFilesResponse,
  ListFineTuneEventsResponse,
  ListFineTunesResponse,
  ListModelsResponse,
  Model,
  OpenAIFile,
} from "./api"

export interface ResponseTypes {
  cancelFineTune: FineTune
  createAnswer: CreateAnswerResponse
  createChatCompletion: CreateChatCompletionResponse
  createClassification: CreateClassificationResponse
  createCompletion: CreateCompletionResponse
  createEdit: CreateEditResponse
  createEmbedding: CreateEmbeddingResponse
  createFile: OpenAIFile
  createFineTune: FineTune
  createImage: ImagesResponse
  createImageEdit: ImagesResponse
  createImageVariation: ImagesResponse
  createModeration: CreateModerationResponse
  createSearch: CreateSearchResponse
  createTranscription: CreateTranscriptionResponse
  createTranslation: CreateTranslationResponse
  deleteFile: DeleteFileResponse
  deleteModel: DeleteModelResponse
  downloadFile: string
  listEngines: ListEnginesResponse
  listFiles: ListFilesResponse
  listFineTuneEvents: ListFineTuneEventsResponse
  listFineTunes: ListFineTunesResponse
  listModels: ListModelsResponse
  retrieveEngine: Engine
  retrieveFile: OpenAIFile
  retrieveFineTune: FineTune
  retrieveModel: Model
}
