import { designToken } from '@/commons/configs';

declare module 'styled-components' {
    export interface DefaultTheme extends ReturnType<typeof designToken> {}
}
