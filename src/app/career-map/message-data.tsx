import React from 'react'

interface IframeData {
  id: string;
}

export interface DataProps {
   iframe: IframeData;
   message?: string;
   height?: string;
   width?: string;
   type?: string;
}

export interface MessageDataProps {
  data?: DataProps;
}

const MessageData: React.FC<MessageDataProps> = ({ data }) => {
  return data ? (
    data.message ? (
      <span>
        <b>Frame ID:</b> {data.iframe.id} &nbsp;
        <b>Message:</b> {data.message}
      </span>
    ) : (
      <span>
        <b>Frame ID:</b> {data.iframe.id} &nbsp;
        <b>Height:</b> {data.height} &nbsp;
        <b>Width:</b> {data.width} &nbsp;
        <b>Event type:</b> {data.type}
      </span>
    )
  ) : null;
}

export default MessageData;