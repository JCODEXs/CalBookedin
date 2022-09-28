<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://glitch.com/favicon.ico" />
    <title>Hello World!</title>
    <script src="https://unpkg.com/@daily-co/daily-js"></script>
    <style>
      #wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
        width: 100%;
        height: 100vh;
      }

      #daily-video {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <div id="daily-video"></div>
      <div>
        <iframe
                src="https://www.mdbg.net/chinese/dictionary"
                width="100%"
                height="100%"
                >
        </iframe>
      </div>
    </div>

    <script>
      const callWrapper = document.getElementById("daily-video");
      const callFrame = window.DailyIframe.createFrame(callWrapper);
      callFrame.join({ url: "https://hush.daily.co/geekle" });
      callFrame.setTheme({
	      colors: {
          accent: '#E83551',
          accentText: '#FFFFFF',
          background: '#071D3A',
          backgroundAccent: '#222E5E',
          baseText: '#FFFFFF',
          border: '#26346B',
          mainAreaBg: '#031429',
          mainAreaBgAccent: '#071D3A',
          mainAreaText: '#FFFFFF',
          supportiveText: '#FFFFFF',
        }
      });
    </script>
  </body>
</html>