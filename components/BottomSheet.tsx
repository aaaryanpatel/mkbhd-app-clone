import { Wallpaper } from '@/hooks/useWallpapers';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Button, Image, StyleSheet } from 'react-native';

export const DownloadPicture = ({onClose, wallpaper}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders-  
  return (
    
    <BottomSheet
    onClose={onClose}
    
    snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{height: 0}}
      handleStyle={{height: 0}}
      
      >
      <BottomSheetView style={styles.contentContainer}>
        <Image 
          style={styles.image} 
          source={{uri: wallpaper.url}} 
          onError={(error) => console.log('Image load error:', error)}
          onLoad={() => console.log('Image loaded successfully')}
        />
        <Button title="Download"></Button>
      </BottomSheetView>
    </BottomSheet>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'grey',
  },       
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  image: {
    width: "80%",
    height: 500,
    resizeMode: "contain",
    backgroundColor: "#f0f0f0",
    borderRadius:20

  }
});

