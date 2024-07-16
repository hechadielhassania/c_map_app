'use client'

import React, { useRef, useState } from "react";
import IframeResizer from "@iframe-resizer/react";

import MessageData, {DataProps} from "./message-data";

interface IframeResizerProps {
  log?: boolean;
  inPageLinks?: boolean;
  forwardRef?: React.RefObject<any>;
  onMessage?: (data: DataProps) => void;
  onResized?: (data: DataProps) => void;
  src?: string;
  width?: string;
  scrolling?: string;
}

export function ParentComponent (props: IframeResizerProps): React.ReactElement {
  const iframeRef = useRef<any>(null);
  const [messageData, setMessageData] = useState<DataProps | undefined>(undefined);

  const onResized = (data: DataProps) => {
    debugger
    setMessageData(data);
  }

  const onMessage = (data: DataProps) => {
    debugger
    setMessageData(data);
    iframeRef.current.sendMessage("Hello back from parent page");
  }

  return (
    <div>
      {/*<IframeResizer*/}
      {/*  license='GPLv3'*/}
      {/*  log={true}*/}
      {/*  inPageLinks*/}
      {/*  checkOrigin={false} // TODO: enable this in production*/}
      {/*  forwardRef={iframeRef}*/}
      {/*  onMessage={onMessage}*/}
      {/*  onResized={onResized}*/}
      {/*  src={props.src}*/}
      {/*  // src="/iframe-resizer-react/html/frame.content.html"*/}
      {/*  width="100%"*/}
      {/*  scrolling={true}*/}
      {/*/>*/}
      <p id="callback">
        <MessageData data={messageData} />
      </p>
    </div>
  );
}