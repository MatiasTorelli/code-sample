export function useImage () {
  const getImageUrl = (imageName) => {
    // Dynamic imports in vite must start relative to the importing file
    const imageUrl = new URL(`../../assets/images/member${imageName}.png`, import.meta.url)
    console.log(imageName)
    return imageUrl
  }

  return {
    getImageUrl
  }
}
