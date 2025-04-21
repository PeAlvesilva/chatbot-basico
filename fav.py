from PIL import Image

# Abra a imagem no caminho correto
imagem = Image.open("C:/Users/pedro/OneDrive/Documentos/Arquivos HTML/Projetos/chatbot básico6/chatbot-img/bot_icon-chatbot_basico-high-resolution-logo-transparent.png")

# Exemplo de redimensionamento
imagem = imagem.resize((256, 256))


imagem.save("favicon.ico", format="ICO")
print("Favicon gerado com sucesso!")
