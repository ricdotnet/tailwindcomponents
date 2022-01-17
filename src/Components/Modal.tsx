// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Modal(props: any) {
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  addEventListener('click', (e) => {
    // @ts-ignore
    if (e.target!.id === 'modal') {
      closeModal();
    }
  });

  const closeModal = () => {
    props.doCloseModal();
  };

  return (
    <div id="modal" className="w-full h-full fixed bg-black bg-opacity-75 top-0">
      <div className="w-2/4 h-auto bg-white p-4 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
        {/* <SyntaxHighlighter language="jsx" style={ocean} showLineNumbers={true}> */}
          {props.children}
        {/* </SyntaxHighlighter> */}
      </div>
    </div>
  );
}
