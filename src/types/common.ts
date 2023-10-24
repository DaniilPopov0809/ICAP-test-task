import { ReactNode } from 'react';

export interface IData {
    message: string;
}

export interface IResponse {
    data: IData;
    status: number;
    statusText: string;
    headers: object;
    config: object;
  }

export interface IRouteProps {
    children: ReactNode;
    redirectTo?: string;
}


export interface IError {
    message: string
}