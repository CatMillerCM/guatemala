'use client'

import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './entry.module.css';

const Entry = () => {
  const router = useRouter();
  const initPlanet = () => {
    const planet = planetaryjs.planet();

    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'https://unpkg.com/world-atlas@1.1.4/world/110m.json' },
      oceans: { fill: 'cadetblue' },
      land: { fill: 'wheat' },
      borders: { stroke: 'wheat' }
    }));

    planet.projection.scale(100).translate([125, 125]);
    const smallCanvas = document.getElementById('smallGlobe');

    planet.onDraw(() => {
      planet.projection.rotate([Date.now() / 30, -20])
    });

    planet.draw(smallCanvas);
  };

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 5000);
  }, []);

  return (
    <main>
      <Script src="https://d3js.org/d3.v3.min.js" />
      <Script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js" />
      <Script src="/js/planetaryjs.min.js" onLoad={initPlanet} />
      <div className={styles.plane}>
        <svg viewBox="0 0 1000 1000" className={styles.planeImg}>
          <path
            fill="#fff"
            d="m 396.22274,793.25936 c -16.46738,-23.48065 -29.9407,-43.98319 -29.9407,-45.56128 0,-2.82664 62.6057,-46.49761 64.27063,-44.83255 1.59104,1.5912 14.23583,101.04671 14.23583,111.97082 0,11.02537 -6.90626,21.11514 -14.45307,21.11514 -2.29462,0 -17.64523,-19.21147 -34.11269,-42.69213 z m 311.6212,27.83425 c -2.6627,-6.37266 -26.07503,-71.91312 -52.02795,-145.64543 -25.95258,-73.73218 -47.90566,-135.22203 -48.78457,-136.64412 -0.87811,-1.42204 25.33212,-29.486 58.2466,-62.3643 l 59.84447,-59.77898 2.09752,17.46799 c 1.15364,9.60739 2.11051,22.95633 2.12613,29.6644 0.0349,11.85679 0.25836,12.09163 8.30079,8.42747 6.94033,-3.16234 9.7054,-2.70224 17.17329,2.85763 4.89554,3.64456 10.29815,10.54938 12.00529,15.34366 2.801,7.86542 1.45141,10.39104 -13.81422,25.84871 l -16.91883,17.13156 3.66662,39.87866 3.66665,39.87869 8.56372,-1.71285 c 10.05664,-2.0113 24.66112,7.95338 27.48543,18.75337 1.38953,5.31435 -2.15265,11.24742 -14.52633,24.33083 l -16.36399,17.30246 5.37957,54.61361 c 2.95878,30.03748 4.43011,58.50001 3.26984,63.25023 -2.37671,9.73037 -33.46177,42.98318 -40.18126,42.98318 -2.40196,0 -6.5458,-5.21397 -9.20877,-11.58677 z m -401.532,-62.55826 c -6.18992,-6.18968 1.00675,-20.9613 33.99135,-69.76973 19.89444,-29.43898 40.74544,-59.51727 46.3351,-66.84067 15.01896,-19.67739 363.92781,-369.25988 387.21409,-387.96203 27.14199,-21.79847 49.55852,-32.60567 67.6321,-32.60567 8.06426,0 16.1017,1.83998 17.86115,4.08886 9.99845,12.77907 5.40753,36.84866 -12.4903,65.48326 -11.71066,18.73571 -367.51749,378.23433 -400.43142,404.58629 -32.75446,26.22444 -123.34419,85.20039 -130.87096,85.20039 -3.88339,0 -8.04197,-0.98102 -9.24111,-2.1807 z m -32.00328,-87.80203 c -27.45989,-19.3874 -43.77749,-33.02094 -43.77749,-36.57696 0,-3.11802 3.94754,-7.88491 8.77282,-10.59318 7.92551,-4.44857 14.24331,-4.19474 65.42207,2.62786 31.15699,4.1534 57.10294,7.99332 57.65779,8.53284 0.55502,0.53933 -9.18556,15.81674 -21.64457,33.94931 l -22.65312,32.96811 z m 109.9644,-262.87331 c -79.16063,-28.2123 -145.76856,-52.4478 -148.01742,-53.85661 -6.52583,-4.08809 -4.96069,-7.91493 9.81331,-23.99353 22.16767,-24.12489 25.90248,-24.89403 91.09244,-18.75806 l 56.01176,5.27216 15.28909,-15.05899 c 17.62469,-17.36001 28.01602,-19.20912 39.4642,-7.02285 5.68094,6.04685 7.0791,10.39011 5.64795,17.54491 l -1.9018,9.50888 39.34808,3.94045 39.34782,3.94047 17.52959,-16.57874 c 9.64146,-9.1184 19.93898,-16.57881 22.88395,-16.57881 6.43745,0 24.49797,17.3477 24.42726,23.46388 -0.0349,2.38727 -1.45757,6.5484 -3.17789,9.24709 -2.64957,4.15683 1.38239,5.40655 26.38434,8.17781 l 29.5123,3.27108 -59.26002,59.6976 c -32.59295,32.83382 -59.53115,59.55837 -59.86317,59.3881 -0.33092,-0.17017 -65.37104,-23.39248 -144.53179,-51.60484 z"
          />
        </svg>
      </div>
      <div className={styles.entry}>
        <canvas id="smallGlobe" width="250" height="250"></canvas>
        <div className={styles.logo}>
          <h2>what's my</h2>
          <h1>#COUNTRY CODE?</h1>
        </div>
      </div>
    </main>
  );
}

export default Entry;
