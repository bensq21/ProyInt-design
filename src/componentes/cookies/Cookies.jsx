import React from 'react';
import MdiCookieAlert from './../../assets/MdiCookieAlert';

const Cookies = () => {
  return (
    <div className="fixed bottom-0 w-screen flex justify-center mb-2">
      <div className="alert w-9/12">
        <MdiCookieAlert className="w-6 h-6" />
        <span>Permitir el uso de cookies en este portal web.</span>
        <div>
          <div className="btn btn-sm grid flex-grow card bg-base-300 rounded-box place-items-center">
            denegar
          </div>
          <div className="divider divider-horizontal">O</div>
          <div className="btn btn-sm btn-primary grid flex-grow card bg-base-300 rounded-box place-items-center">
            aceptar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;

// Pictogrammers Free License
// --------------------------

// This icon collection is released as free, open source, and GPL friendly by
// the [Pictogrammers](http://pictogrammers.com/) icon group. You may use it
// for commercial projects, open source projects, or anything really.

// # Icons: Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
// Some of the icons are redistributed under the Apache 2.0 license. All other
// icons are either redistributed under their respective licenses or are
// distributed under the Apache 2.0 license.

// # Fonts: Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
// All web and desktop fonts are distributed under the Apache 2.0 license. Web
// and desktop fonts contain some icons that are redistributed under the Apache
// 2.0 license. All other icons are either redistributed under their respective
// licenses or are distributed under the Apache 2.0 license.

// # Code: MIT (https://opensource.org/licenses/MIT)
// The MIT license applies to all non-font and non-icon files.
