import Head from "next/head";
import Script from "next/script";
import { useRef, useState } from "react";


export default function Home() {
  const [files, setFiles] = useState([]);
  const tokenClient = useRef(null);
  const gapiInited = useRef(false);
  const gisInited = useRef(false);

  /* exported gapiLoaded */
  /* exported gisLoaded */
  /* exported handleAuthClick */
  /* exported handleSignoutClick */

  // TODO(developer): Set to client ID and API key from the Developer Console
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_APP_CLIENT_ID;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;

  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/drive';


  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    console.log('Google API loaded');
    gapi.load('client', initializeGapiClient);
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited.current = true;
    maybeEnableButtons();
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    console.log('Google Identity Services loaded')
    tokenClient.current = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited.current = true;
    maybeEnableButtons();
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (gapiInited.current && gisInited.current) {
      document.getElementById('authorize_button').style.visibility = 'visible';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    tokenClient.current.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await listFiles();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.current.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.current.requestAccessToken({ prompt: '' });
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Authorize';
      document.getElementById('signout_button').style.visibility = 'hidden';
      setFiles([]);
    }
  }

  /**
   * Print metadata for first 10 files.
   */
  async function listFiles() {
    let response;
    try {
      response = await gapi.client.drive.files.list({
        'pageSize': 25,
        'fields': '*',
        // 'fields': 'files(id, name)',
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
    const files = response.result.files;
    if (!files || files.length == 0) {
      document.getElementById('content').innerText = 'No files found.';
      return;
    }
    setFiles(files);

    // // Flatten to string to display
    // const output = files.reduce(
    //   (str, file) => `${str}${file.name} (${file.id}\n`,
    //   'Files:\n');
    // document.getElementById('content').innerText = output;
  }

  return (
    <div className="mx-4 md:mx-12 my-6 space-y-12">

      <Head>
        <title>Google Drive</title>
      </Head>

      <div className="space-y-4">
        <p className="text-slate-700 text-2xl font-semibold">Drive API Test</p>
        {/* <!--Add buttons to initiate auth sequence and sign out--> */}
        <button style={{ visibility: 'hidden' }} id="authorize_button" onClick={handleAuthClick} className="text-indigo-600 font-semibold underline mr-2 pt-2 px-2 hover:bg-slate-100 ">Authorize</button>
        <button style={{ visibility: 'hidden' }} id="signout_button" onClick={handleSignoutClick} className="text-indigo-600 font-semibold underline mr-2 pt-2 px-2 hover:bg-slate-100 ">Sign Out</button>
      </div>
      <pre id="content" style={{ 'whiteSpace': 'pre-wrap' }}></pre>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          files.map(file => (
            // Card
            <div key={file.id} className="border rounded-2xl overflow-hidden hover:shadow-md">
              {/* Card header */}
              <div className="flex justify-center border-b">
                {file.hasThumbnail ? <img src={file.thumbnailLink} className="object-cover h-[170px]" /> : <img src="https://static2.medplusmart.com/live/martpwa/V9/mCart/images/npa.png"></img>}
              </div>

              {/* Card body */}
              <div className="px-4 pt-2 pb-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <img src={file.iconLink}></img>
                  <a href={file.webViewLink} className="font-semibold hover:text-indigo-600 hover:underline" target="_blank" rel="noreferrer">{file.name}</a>
                </div>

                <div>
                  <div>
                    {file.owners.map(owner => (
                      <div key={file.id + owner.id} className="flex items-center space-x-2">
                        <img src={owner.photoLink} className="rounded-full w-6 h-6"></img>
                        <p>{owner.displayName}</p>
                      </div>
                    ))}
                  </div>
                  <div className="ml-8">
                    {file.size && <p>{(parseInt(file.size) / 1000 / 1000).toFixed(2)} MB</p>}
                    <p>Created {Math.round((new Date() - new Date(file.createdTime)) / 1000 / 60 / 60 / 24)} days ago</p>
                    <p>Modified {Math.round((new Date() - new Date(file.modifiedTime)) / 1000 / 60 / 60 / 24)} days ago</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex">
                    {file.webViewLink && <a href={file.webViewLink} className="font-semibold hover:text-indigo-600 hover:underline" target="_blank" rel="noreferrer">View content</a>}
                  </div>
                  <div className="flex">
                    {file.exportLinks && <a href={file.exportLinks['application/pdf']} className="font-semibold hover:text-indigo-600 hover:underline" target="_blank" rel="noreferrer">Export PDF &darr;</a>}
                  </div>
                  <div className="flex">
                    {file.webContentLink && <a href={file.webContentLink} className="font-semibold hover:text-indigo-600 hover:underline" target="_blank" rel="noreferrer">Download &darr;</a>}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <Script async defer src="https://apis.google.com/js/api.js" onLoad={gapiLoaded}></Script>
      <Script async defer src="https://accounts.google.com/gsi/client" onLoad={gisLoaded}></Script>
    </div >
  )
}
