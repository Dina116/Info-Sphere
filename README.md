# 📱 InfoSphere  
A React Native News Application  

InfoSphere is a modern, clean, and fast mobile news application built with **React Native (TypeScript)**.  
It allows users to browse the latest news, open full article details, and save their favourite articles easily.

---

## 🚀 Features

### 📰 **Top Headlines**
- Displays the latest breaking news from trusted sources.
- Clean and responsive UI.

### 🗂️ **Everything News**
- A separate section that lists more articles.
- Implemented using a regular `FlatList`.
- Helps users explore more general content easily.

### 📄 **Article Details**
When the user taps any article:
- image  
- Title  
- Description  
- Button to **Back to the Home Screen**
- Button to **Add to Favourite**

### ❤️ **Favourite Articles**
- Users can save articles they like.
- Stored using **Zustand**.
- Accessible from a dedicated Favourites screen.

### 🧭 **Navigation**
- Built using **React Navigation**
- **Stack Navigator** → for screens  
- **Bottom Tabs** → Home + Favourites  

---

## 🛠️ Technologies Used

- **React Native (TypeScript)**
- **React Navigation**
- **Zustand** (state management)
- **Axios**
- **react-native-safe-area-context**
- **Kotlin Native Module**

---

## 🔧 Native Kotlin Integration

This app also includes a simple Android-native module written in **Kotlin** to show a Toast message:

```ts
ToastExample.showToast("Added to Favourites ");
```
---

---
## App Video

https://github.com/user-attachments/assets/a2d049c9-f4b3-47f7-8cee-a5f3969a32d7
