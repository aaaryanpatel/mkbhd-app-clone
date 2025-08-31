# MKBHD Wallpaper App Clone 🖼️

A React Native wallpaper application inspired by MKBHD's aesthetic, built with Expo and featuring a modern, clean interface for browsing and downloading high-quality wallpapers.

## 📱 What This App Does

This is a **wallpaper discovery and download app** that provides users with a curated collection of high-quality wallpapers. The app features:

### Core Features
- **🏠 Home Tab (For You)** - Browse wallpapers organized in three categories:
  - **Library** - Main wallpaper collection
  - **Liked** - User's favorited wallpapers  
  - **Suggested** - Recommended wallpapers
- **🔍 Explore Tab** - Discover new wallpapers and browse categories
- **👤 Account Tab** - User profile and settings with bottom sheet demo

### Key Components
- **ImageCard Component** - Displays wallpaper previews with:
  - High-quality image thumbnails (220px height)
  - Wallpaper name overlay
  - Heart icon for favorites
  - Pressable interaction for full view
- **BottomSheet Component** - Full-screen wallpaper viewer with:
  - Large wallpaper preview (80% width, 500px height)
  - Download functionality
  - Heart/favorite toggle
  - Smooth pan-to-close gesture

### Technical Architecture
- **Custom Wallpaper Hook** (`useWallpapers`) - Manages wallpaper data with TypeScript interfaces
- **Theme Support** - Light/dark mode with adaptive colors
- **Cross-Platform** - iOS, Android, and Web support
- **Modern Navigation** - Tab-based navigation with Material Top Tabs

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mkbhd-app-clone-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for Web Browser
   - Scan QR code with Expo Go app on your device

## 🛠️ Tech Stack

### Core Technologies
- **React Native** (0.79.6) - Cross-platform mobile framework
- **Expo** (~53.0.22) - Development platform and toolchain
- **TypeScript** (~5.8.3) - Type-safe JavaScript
- **Expo Router** (~5.1.5) - File-based navigation

### Key Dependencies
- **@gorhom/bottom-sheet** (^5.2.3) - Smooth bottom sheet interactions
- **@react-navigation/material-top-tabs** (^7.3.6) - Material Design tab navigation
- **@expo/vector-icons** (^14.1.0) - Icon library
- **expo-blur** (~14.1.5) - Blur effects
- **expo-haptics** (~14.1.4) - Haptic feedback
- **react-native-reanimated** (~3.17.4) - Smooth animations

## 📁 Project Structure

```
mkbhd-app-clone-main/
├── app/                    # File-based routing
│   ├── (tabs)/            # Tab navigation group
│   │   ├── foryou.tsx     # Home tab with material top tabs
│   │   ├── index.tsx      # Explore tab
│   │   ├── account.tsx    # Account tab with bottom sheet demo
│   │   └── _layout.tsx    # Tab navigation layout
│   └── (nobottombar)/     # Routes without bottom tab bar
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── ImageCard.tsx     # Wallpaper preview card
│   ├── BottomSheet.tsx   # Full-screen wallpaper viewer
│   └── ThemedText.tsx    # Theme-aware text component
├── hooks/                # Custom React hooks
│   ├── useWallpapers.ts  # Wallpaper data management
│   ├── useColorScheme.ts # Theme detection
│   └── useThemeColor.ts  # Theme-based colors
├── constants/            # App constants
│   └── Colors.ts         # Light/dark theme colors
└── assets/              # Static assets
    ├── images/          # App icons and images
    └── fonts/           # Custom fonts
```

## 🎨 Current Wallpaper Collection

The app currently features 5 curated wallpapers:
- **Heritage** - Abstract artistic design
- **Joker** - Character-inspired artwork  
- **Motivation** - Inspirational design
- **Watch** - Technology-themed wallpaper
- **Tiger** - Nature/wildlife artwork

*All wallpapers are sourced from Ideogram AI and displayed at high resolution.*

## 🔧 Development Commands

```bash
# Start development server
npm start

# Platform-specific builds
npm run android          # Android development
npm run ios             # iOS development  
npm run web             # Web development

# Code quality
npm run lint            # Run ESLint

# Reset project (removes example code)
npm run reset-project
```

## 🚧 Current Development Status

### ✅ Completed Features
- Basic tab navigation structure
- Wallpaper data management system
- ImageCard component with theming
- BottomSheet wallpaper viewer
- Cross-platform compatibility
- TypeScript integration

### 🔄 In Progress
- Bottom sheet color theming (currently has import issues)
- Full wallpaper grid implementation
- Download functionality integration

### ❌ Known Issues
- `BottomSheet.tsx` line 45: Missing `Colors` import and `theme` variable
- For You tab shows placeholder content instead of wallpaper grid
- Download button is not functional yet

## 🎯 Future Roadmap

### Phase 1: Core Functionality (Next 2-4 weeks)
- **Fix theming issues** - Resolve color imports and theme variables
- **Implement wallpaper grid** - Replace placeholder content with actual ImageCard grid
- **Add search functionality** - Search wallpapers by name or category
- **Implement download feature** - Allow users to save wallpapers to device
- **Add favorites system** - Persistent liked wallpapers storage

### Phase 2: Enhanced UX (1-2 months)
- **Categories and filtering** - Organize wallpapers by themes/categories
- **Infinite scroll** - Load more wallpapers dynamically
- **Image caching** - Improve performance with cached images
- **Haptic feedback** - Add tactile responses for interactions
- **Loading states** - Skeleton screens and progress indicators

### Phase 3: Advanced Features (2-3 months)
- **User accounts** - Authentication and personalized experience
- **Cloud sync** - Sync favorites across devices
- **Custom collections** - User-created wallpaper collections
- **Social features** - Share wallpapers and collections
- **AI recommendations** - Personalized wallpaper suggestions

### Phase 4: Platform Optimization (3-4 months)
- **Performance optimization** - Image compression and lazy loading
- **Offline support** - Cache wallpapers for offline viewing
- **Widget support** - iOS/Android home screen widgets
- **Apple Watch companion** - Quick wallpaper browsing
- **Desktop app** - Electron-based desktop version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes and is inspired by MKBHD's design aesthetic. All wallpapers are sourced from Ideogram AI.

## 🔗 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Bottom Sheet Library](https://gorhom.github.io/react-native-bottom-sheet/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
