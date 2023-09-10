function UploadModal({unShowModal}: {unShowModal: () => void}) {

return (
    <div className="fixed m-auto inset-0 flex flex-col justify-center bg-gray-800 z-50 space-y-5 w-60 h-60 p-5 rounded">
        <button onClick={unShowModal}>Upload</button>
        <form>
          <h1>File Upload</h1>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default UploadModal;