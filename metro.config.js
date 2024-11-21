const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const { assetExts } = defaultConfig.resolver;

  return {
    resolver: {
      // 기본 설정에 추가적으로 .bin, .db, .onnx, .ort 확장자를 지원
      assetExts: [...assetExts, 'bin', 'db', 'onnx', 'ort'],
    },
    // 기타 설정이 필요한 경우 추가 가능
    transformer: defaultConfig.transformer,
    serializer: defaultConfig.serializer,
    server: defaultConfig.server,
  };
})();
