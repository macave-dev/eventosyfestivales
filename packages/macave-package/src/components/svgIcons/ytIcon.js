import React, {useState, useEffect} from 'react';
import {connect, styled,css}  from 'frontity';

const YtIcon = (props) => { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20.17" height="14.88" viewBox="0 0 20.17 14.88">
            <path id="Trazado_677" data-name="Trazado 677" d="M131.014,14.258c-.011-1.26-.041-2.527-.171-3.779a2.785,2.785,0,0,0-2.55-2.757,10.5,10.5,0,0,0-1.686-.223c-1.88-.07-3.761-.03-5.641-.078-1.478,0-2.957-.047-4.43.016a22.657,22.657,0,0,0-3.3.38,2.567,2.567,0,0,0-2.14,2.269,14.039,14.039,0,0,0-.215,2.029c-.034,1.564-.047,3.129-.014,4.692a21.856,21.856,0,0,0,.233,2.787,2.6,2.6,0,0,0,2.13,2.279,9.688,9.688,0,0,0,1.9.3c2.448.068,4.9.119,7.345.112,1.665,0,3.334-.049,4.991-.189,2.407-.2,3.318-1.16,3.459-3.562.085-1.423.1-2.851.088-4.276m-5.636,1.118c-1.056.638-2.13,1.245-3.2,1.864q-1.7.985-3.407,1.966c-.672.386-1.1.137-1.106-.638,0-1.248,0-2.5,0-3.745s0-2.471,0-3.707c0-.779.43-1.025,1.1-.635q2.931,1.7,5.855,3.4c.25.145.516.267.754.43a.585.585,0,0,1,0,1.069" transform="translate(-110.847 -7.404)"/>
        </svg>
    )
}

export default connect(YtIcon)