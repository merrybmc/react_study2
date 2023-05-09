import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    textColor: string;
    bgColor: string;
    btnColor: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
