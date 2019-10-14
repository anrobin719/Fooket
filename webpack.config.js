// in order to absolute path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// node.js syntax로 export
// entry point, output, loaders, plugins
module.exports = {
  // 함께 번들할 파일 의존성을 띈 파일을 정한다.
  entry: "./src/js/index.js",
  // 어디에 저장할지 정한다.
  output: {
    // 현재의 absolute path(__dirname)를 번들이 포함되기 원하는 경로(dist)와 함께 포함시킨다.
    path: path.resolve(__dirname, "dist"),
    // 파일의 경로와 이름을 지정한다.
    filename: "js/bundle.js"
  },
  devServer: {
    // 웹팩이 server할 폴더 정의
    contentBase: "./dist"
  },
  // 플러그인을 사용하면 복잡한 처리를 수행할 수 있다.
  plugins: [
    new HtmlWebpackPlugin(
      // 옵션 설정
      {
        filename: "index.html",
        // 시작하는 파일
        template: "./src/index.html"
      }
    )
  ]
};
