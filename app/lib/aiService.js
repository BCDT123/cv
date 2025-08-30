import { getResponseAi as getRealResponseAi } from "./ai";
import { getResponseAi as getMockResponseAi } from "./aiMock";

export const aiServiceType = {
  mockService: "mockService",
  aiService: "aiService",
};

export async function getResponseAi(question, serviceType) {
  if (!serviceType) {
    serviceType =
      process.env.NEXT_PUBLIC_AI_SERVICE_TYPE || serviceType.mockService;
  }

  if (serviceType === "mockService") {
    return getMockResponseAi();
  } else if (serviceType === serviceType.aiService) {
    return getRealResponseAi(question);
  }

  throw "Invalid AI service type";
}
