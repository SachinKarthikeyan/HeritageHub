import openai
import gradio

openai.api_key = "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"

messages = [{"role" : "Thoth", "content" : "you are a historian"}]

def CustomChatGPT(user_input):
    messages.append({"role" : "Thoth", "content" : user_input})
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messsages = messages
    )
    ChatGPT_reply = response["choices"][0]["messages"]["content"]
    messages.append({"role": "assitant" , "content" : ChatGPT_reply})
    return ChatGPT_reply

demo = gradio.Interface(fn=CustomChatGPT,inputs = "text", outputs = "text",title="Thoth- the Egyptian God of Wisdom")

demo.launch(share=True)