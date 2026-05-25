<div align="center">

# ⛽ Gasolapp

### Etanol ou gasolina? Descubra em segundos qual vale mais a pena.

[![Version](https://img.shields.io/badge/versão-1.0.0-4950CB?style=flat-square)](https://github.com/siqueira2009/combustivel-ideal/releases/tag/v1.0)
[![Platform](https://img.shields.io/badge/plataforma-Android-3DDC84?style=flat-square&logo=android&logoColor=white)](https://github.com/siqueira2009/combustivel-ideal/releases)
[![React Native](https://img.shields.io/badge/React_Native-0.83.6-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-55-000020?style=flat-square&logo=expo)](https://expo.dev/)
[![License](https://img.shields.io/badge/licença-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📲 Instalação do APK

1. Acesse a seção [**Releases**](https://github.com/siqueira2009/combustivel-ideal/releases) e baixe o arquivo `gasolapp-v1.0.apk`
2. No Android, vá em **Configurações → Segurança → Fontes desconhecidas** e habilite a opção
3. Abra o arquivo `.apk` baixado e toque em **Instalar**

> ⚠️ Requisito mínimo: **Android 6.0** ou superior.

---

## 🚀 Funcionalidades

### 🔢 Cálculo instantâneo pela regra dos 70%
Digite o preço do etanol e da gasolina e o resultado aparece na hora, sem precisar apertar nenhum botão. A lógica: se o etanol custar menos de 70% do valor da gasolina, ele compensa, caso contrário, vá de gasolina.

### ✅ Recomendação visual clara
Resultado exibido com cor e ícone distintos, verde para a melhor opção, amarelo quando os preços estão empatados. Sem ambiguidade, você decide com um olhar só.

### 🧮 Razão calculada em tempo real
Além da recomendação, o app exibe o valor exato da razão etanol/gasolina, para você saber o quão vantajosa (ou não) é a diferença de preços naquele momento.

### ⌨️ Teclado numérico otimizado
Os campos aceitam tanto ponto quanto vírgula como separador decimal, sem erros ou travamentos. O teclado numérico abre automaticamente ao tocar no campo.

### 🎨 Bottom Sheet com detalhes
Painel deslizante com animação fluida que exibe a explicação da regra dos 70% e os detalhes do cálculo, sem sair da tela principal.

### 📴 100% offline
Nenhuma conexão com internet necessária. O cálculo é feito localmente no dispositivo, funciona até no posto sem sinal.

---

## 🧮 A regra dos 70% explicada

O etanol tem menor poder energético que a gasolina, percorre cerca de 70% da distância por litro. Portanto, só vale a pena abastecer com etanol se ele custar menos de 70% do preço da gasolina.

```
razão = preço do etanol ÷ preço da gasolina
```

| Razão calculada | Conclusão |
|---|---|
| < 0,70 | ✅ **Etanol** é mais vantajoso |
| >= 0,70 | ✅ **Gasolina** é mais vantajosa |
---

## 🛠️ Tech Stack

| Tecnologia | Versão |
|---|---|
| React Native | 0.83.6 |
| Expo | ~55.0 |
| React | 19.2.0 |
| @gorhom/bottom-sheet | ^5.2.14 |
| react-native-reanimated | 4.2.1 |
| react-native-gesture-handler | ~2.30.0 |
| react-native-svg | 15.15.3 |
| lucide-react-native | ^1.16.0 |

---

## 🧑‍💻 Rodando Localmente

### Pré-requisitos

- Node.js >= 18
- npm
- Expo CLI (`npm install -g expo-cli`)
- Emulador Android ou dispositivo físico

### Instalação

```bash
# Clone o repositório
git clone https://github.com/siqueira2009/combustivel-ideal.git
cd combustivel-ideal

# Instale as dependências
npm install
```

### Executando

```bash
# Inicia o servidor de desenvolvimento
npx expo start
```

---

## 📁 Estrutura do Projeto

```
combustivel-ideal/
├── builds/
│   └── android/            # APKs gerados para distribuição
│
├── src/
│   ├── assets/             # Imagens
│   ├── components/         # Componentes personalizados
│   ├── contexts/           # Contextos
│   ├── screens/            # Telas
│   ├── services/           # Serviços
│   └── App.jsx             # Página principal que chama a única tela do app
│
├── app.json                # Configuração do Expo
├── eas.json                # Configuração de build EAS
├── index.js                # Entry point (arquivo de início)
└── package.json
```

---

## 🔒 Privacidade

O Gasolapp não coleta, armazena nem transmite nenhum dado. Nenhum cadastro, nenhuma conta, nenhuma permissão de rede. O que você digita fica só no seu celular.

---

Feito por [Lucas Siqueira](https://www.linkedin.com/in/lucasdesouzasiqueira/) para a matéria de PAM (Programação de Aplicativos Mobile) do professor Rafael Cruz.