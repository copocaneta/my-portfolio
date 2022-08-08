import { Box } from '@chakra-ui/react';
import './index.scss';
const CodeBrackets = () => {
  return (
    <Box
      className="wrap floating-elements"
      position={{ base: 'absolute' }}
      top={'-49px'}
      left={0}
      height={{ base: 'calc(100vh - 90px)', lg: 'inherit' }}
      width={{ base: '92vw', lg: 'inherit' }}
      overflow={{ base: 'hidden' }}
    >
      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fil0"
          d="M0.0240945 91.8181l0 17.0428c4.52776,0.108425 8.23831,1.57016 11.1015,4.38319 2.83713,2.78492 4.74059,6.56173 5.70638,11.3043 0.933661,4.77874 1.44768,12.9789 1.4778,24.6045 0.0622441,11.6617 0.240945,19.2917 0.544134,23.0042 0.53811,5.91921 1.50791,10.6237 2.95559,14.1535 1.44768,3.52984 3.22866,6.34488 5.34295,8.44913 2.14039,2.14039 4.85504,3.74669 8.14394,4.85102 2.23276,0.783071 5.88709,1.17661 10.9509,1.17661l4.95343 0 0 -16.4043 -2.74677 0c-6.12602,0 -10.1699,-1.31717 -12.1918,-3.91736 -1.99181,-2.60823 -2.98772,-8.4913 -2.98772,-17.6191 0,-17.3982 -0.271063,-28.4556 -0.815197,-33.1239 -0.935669,-7.7022 -2.83311,-13.9065 -5.64012,-18.5467 -2.83913,-4.59602 -6.85087,-8.19815 -12.0392,-10.8004 6.78862,-3.81496 11.5553,-8.87882 14.3322,-15.1916 2.77689,-6.31276 4.16232,-16.9384 4.16232,-31.9131 0,-13.5833 0.12248,-21.681 0.421654,-24.3555 0.425669,-4.66831 1.57016,-7.91303 3.49972,-9.77031 1.90346,-1.81913 5.67626,-2.74677 11.2581,-2.74677l2.74677 0 0 -16.3983 -4.95343 0c-5.7626,0 -9.95504,0.534094 -12.5512,1.67457 -3.7728,1.53402 -6.87697,4.09807 -9.35067,7.7022 -2.4737,3.63827 -4.1061,8.19815 -4.82894,13.6937 -0.724843,5.52366 -1.14449,14.5491 -1.20673,27.0601 -0.0301181,12.5532 -0.544134,21.1831 -1.4778,25.9618 -0.965787,4.77874 -2.86925,8.55756 -5.70638,11.3405 -2.86323,2.7789 -6.57378,4.24063 -11.1015,4.3852z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <polyline
          points="80 40 40 40 40 216 80 216"
          fill="none"
          // stroke="#000"

          stroke-width="18"
        />
        <polyline
          points="176 40 216 40 216 216 176 216"
          fill="none"
          // stroke="#000"

          stroke-width="18"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <polygon
          stroke-width="18"
          fill="none"
          points="195.568,185.811 142.681,250.173 195.568,314.534 208.077,293.962 172.44,250.173      208.077,206.384    "
        />
        <polygon
          stroke-width="18"
          fill="none"
          points="228.707,313 251.922,313 288.816,187 265.6,187    "
        />
        <polygon
          stroke-width="18"
          fill="none"
          points="303.876,185.81 291.37,206.384 327.005,250.173 291.37,293.961 303.876,314.535 356.765,250.173         "
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fil0"
          d="M0.0240945 91.8181l0 17.0428c4.52776,0.108425 8.23831,1.57016 11.1015,4.38319 2.83713,2.78492 4.74059,6.56173 5.70638,11.3043 0.933661,4.77874 1.44768,12.9789 1.4778,24.6045 0.0622441,11.6617 0.240945,19.2917 0.544134,23.0042 0.53811,5.91921 1.50791,10.6237 2.95559,14.1535 1.44768,3.52984 3.22866,6.34488 5.34295,8.44913 2.14039,2.14039 4.85504,3.74669 8.14394,4.85102 2.23276,0.783071 5.88709,1.17661 10.9509,1.17661l4.95343 0 0 -16.4043 -2.74677 0c-6.12602,0 -10.1699,-1.31717 -12.1918,-3.91736 -1.99181,-2.60823 -2.98772,-8.4913 -2.98772,-17.6191 0,-17.3982 -0.271063,-28.4556 -0.815197,-33.1239 -0.935669,-7.7022 -2.83311,-13.9065 -5.64012,-18.5467 -2.83913,-4.59602 -6.85087,-8.19815 -12.0392,-10.8004 6.78862,-3.81496 11.5553,-8.87882 14.3322,-15.1916 2.77689,-6.31276 4.16232,-16.9384 4.16232,-31.9131 0,-13.5833 0.12248,-21.681 0.421654,-24.3555 0.425669,-4.66831 1.57016,-7.91303 3.49972,-9.77031 1.90346,-1.81913 5.67626,-2.74677 11.2581,-2.74677l2.74677 0 0 -16.3983 -4.95343 0c-5.7626,0 -9.95504,0.534094 -12.5512,1.67457 -3.7728,1.53402 -6.87697,4.09807 -9.35067,7.7022 -2.4737,3.63827 -4.1061,8.19815 -4.82894,13.6937 -0.724843,5.52366 -1.14449,14.5491 -1.20673,27.0601 -0.0301181,12.5532 -0.544134,21.1831 -1.4778,25.9618 -0.965787,4.77874 -2.86925,8.55756 -5.70638,11.3405 -2.86323,2.7789 -6.57378,4.24063 -11.1015,4.3852z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-130 189.1c4.6 8.8 9.3 17.5 14.3 26.1 5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5zm0-50.6c-6.3-14.9-11.6-29.5-16-43.6 14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26zm11.4 25.3c6.6-13.8 13.8-27.3 21.4-40.6 7.6-13.3 15.8-26.2 24.4-38.9 15-1.1 30.3-1.7 45.9-1.7 15.6 0 31 .6 45.9 1.7 8.5 12.6 16.6 25.5 24.3 38.7 7.7 13.2 14.9 26.7 21.7 40.4-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6-15.7 0-30.9-.5-45.6-1.4-8.7-12.7-16.9-25.7-24.6-39-7.7-13.3-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 210.2c25.3 0 45.8 20.5 45.8 45.8 0 25.3-20.5 45.8-45.8 45.8-25.3 0-45.8-20.5-45.8-45.8 0-25.3 20.5-45.8 45.8-45.8"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fil0"
          d="M51.2008 91.8181l0 17.0428c-4.52776,0.108425 -8.23831,1.57016 -11.1015,4.38319 -2.83713,2.78492 -4.74059,6.56173 -5.70638,11.3043 -0.933661,4.77874 -1.44768,12.9789 -1.4778,24.6045 -0.0622441,11.6617 -0.240945,19.2917 -0.544134,23.0042 -0.53811,5.91921 -1.50791,10.6237 -2.95559,14.1535 -1.44768,3.52984 -3.22866,6.34488 -5.34295,8.44913 -2.14039,2.14039 -4.85504,3.74669 -8.14394,4.85102 -2.23276,0.783071 -5.88709,1.17661 -10.9509,1.17661l-4.95343 0 0 -16.4043 2.74677 0c6.12602,0 10.1699,-1.31717 12.1918,-3.91736 1.99181,-2.60823 2.98772,-8.4913 2.98772,-17.6191 0,-17.3982 0.271063,-28.4556 0.815197,-33.1239 0.935669,-7.7022 2.83311,-13.9065 5.64012,-18.5467 2.83913,-4.59602 6.85087,-8.19815 12.0392,-10.8004 -6.78862,-3.81496 -11.5553,-8.87882 -14.3322,-15.1916 -2.77689,-6.31276 -4.16232,-16.9384 -4.16232,-31.9131 0,-13.5833 -0.12248,-21.681 -0.421654,-24.3555 -0.425669,-4.66831 -1.57016,-7.91303 -3.49972,-9.77031 -1.90346,-1.81913 -5.67626,-2.74677 -11.2581,-2.74677l-2.74677 0 0 -16.3983 4.95343 0c5.7626,0 9.95504,0.534094 12.5512,1.67457 3.7728,1.53402 6.87697,4.09807 9.35067,7.7022 2.4737,3.63827 4.1061,8.19815 4.82894,13.6937 0.724843,5.52366 1.14449,14.5491 1.20673,27.0601 0.0301181,12.5532 0.544134,21.1831 1.4778,25.9618 0.965787,4.77874 2.86925,8.55756 5.70638,11.3405 2.86323,2.7789 6.57378,4.24063 11.1015,4.3852z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fil0"
          d="M0.0240945 91.8181l0 17.0428c4.52776,0.108425 8.23831,1.57016 11.1015,4.38319 2.83713,2.78492 4.74059,6.56173 5.70638,11.3043 0.933661,4.77874 1.44768,12.9789 1.4778,24.6045 0.0622441,11.6617 0.240945,19.2917 0.544134,23.0042 0.53811,5.91921 1.50791,10.6237 2.95559,14.1535 1.44768,3.52984 3.22866,6.34488 5.34295,8.44913 2.14039,2.14039 4.85504,3.74669 8.14394,4.85102 2.23276,0.783071 5.88709,1.17661 10.9509,1.17661l4.95343 0 0 -16.4043 -2.74677 0c-6.12602,0 -10.1699,-1.31717 -12.1918,-3.91736 -1.99181,-2.60823 -2.98772,-8.4913 -2.98772,-17.6191 0,-17.3982 -0.271063,-28.4556 -0.815197,-33.1239 -0.935669,-7.7022 -2.83311,-13.9065 -5.64012,-18.5467 -2.83913,-4.59602 -6.85087,-8.19815 -12.0392,-10.8004 6.78862,-3.81496 11.5553,-8.87882 14.3322,-15.1916 2.77689,-6.31276 4.16232,-16.9384 4.16232,-31.9131 0,-13.5833 0.12248,-21.681 0.421654,-24.3555 0.425669,-4.66831 1.57016,-7.91303 3.49972,-9.77031 1.90346,-1.81913 5.67626,-2.74677 11.2581,-2.74677l2.74677 0 0 -16.3983 -4.95343 0c-5.7626,0 -9.95504,0.534094 -12.5512,1.67457 -3.7728,1.53402 -6.87697,4.09807 -9.35067,7.7022 -2.4737,3.63827 -4.1061,8.19815 -4.82894,13.6937 -0.724843,5.52366 -1.14449,14.5491 -1.20673,27.0601 -0.0301181,12.5532 -0.544134,21.1831 -1.4778,25.9618 -0.965787,4.77874 -2.86925,8.55756 -5.70638,11.3405 -2.86323,2.7789 -6.57378,4.24063 -11.1015,4.3852z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
	v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
	h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m 31.674539,98.50831 -21.506585,9.19179 v -3.96465 L 27.20046,96.669951 10.167954,89.670898 v -3.964654 l 21.506585,9.08105 z"
          stroke-width="18"
          fill="none"
        />
      </svg>
      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fil0"
          d="M0.0240945 91.8181l0 17.0428c4.52776,0.108425 8.23831,1.57016 11.1015,4.38319 2.83713,2.78492 4.74059,6.56173 5.70638,11.3043 0.933661,4.77874 1.44768,12.9789 1.4778,24.6045 0.0622441,11.6617 0.240945,19.2917 0.544134,23.0042 0.53811,5.91921 1.50791,10.6237 2.95559,14.1535 1.44768,3.52984 3.22866,6.34488 5.34295,8.44913 2.14039,2.14039 4.85504,3.74669 8.14394,4.85102 2.23276,0.783071 5.88709,1.17661 10.9509,1.17661l4.95343 0 0 -16.4043 -2.74677 0c-6.12602,0 -10.1699,-1.31717 -12.1918,-3.91736 -1.99181,-2.60823 -2.98772,-8.4913 -2.98772,-17.6191 0,-17.3982 -0.271063,-28.4556 -0.815197,-33.1239 -0.935669,-7.7022 -2.83311,-13.9065 -5.64012,-18.5467 -2.83913,-4.59602 -6.85087,-8.19815 -12.0392,-10.8004 6.78862,-3.81496 11.5553,-8.87882 14.3322,-15.1916 2.77689,-6.31276 4.16232,-16.9384 4.16232,-31.9131 0,-13.5833 0.12248,-21.681 0.421654,-24.3555 0.425669,-4.66831 1.57016,-7.91303 3.49972,-9.77031 1.90346,-1.81913 5.67626,-2.74677 11.2581,-2.74677l2.74677 0 0 -16.3983 -4.95343 0c-5.7626,0 -9.95504,0.534094 -12.5512,1.67457 -3.7728,1.53402 -6.87697,4.09807 -9.35067,7.7022 -2.4737,3.63827 -4.1061,8.19815 -4.82894,13.6937 -0.724843,5.52366 -1.14449,14.5491 -1.20673,27.0601 -0.0301181,12.5532 -0.544134,21.1831 -1.4778,25.9618 -0.965787,4.77874 -2.86925,8.55756 -5.70638,11.3405 -2.86323,2.7789 -6.57378,4.24063 -11.1015,4.3852z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
	v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
	h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m 31.674539,98.50831 -21.506585,9.19179 v -3.96465 L 27.20046,96.669951 10.167954,89.670898 v -3.964654 l 21.506585,9.08105 z"
          stroke-width="18"
          fill="none"
        />
      </svg>
      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          class="fil0"
          d="M0.0240945 91.8181l0 17.0428c4.52776,0.108425 8.23831,1.57016 11.1015,4.38319 2.83713,2.78492 4.74059,6.56173 5.70638,11.3043 0.933661,4.77874 1.44768,12.9789 1.4778,24.6045 0.0622441,11.6617 0.240945,19.2917 0.544134,23.0042 0.53811,5.91921 1.50791,10.6237 2.95559,14.1535 1.44768,3.52984 3.22866,6.34488 5.34295,8.44913 2.14039,2.14039 4.85504,3.74669 8.14394,4.85102 2.23276,0.783071 5.88709,1.17661 10.9509,1.17661l4.95343 0 0 -16.4043 -2.74677 0c-6.12602,0 -10.1699,-1.31717 -12.1918,-3.91736 -1.99181,-2.60823 -2.98772,-8.4913 -2.98772,-17.6191 0,-17.3982 -0.271063,-28.4556 -0.815197,-33.1239 -0.935669,-7.7022 -2.83311,-13.9065 -5.64012,-18.5467 -2.83913,-4.59602 -6.85087,-8.19815 -12.0392,-10.8004 6.78862,-3.81496 11.5553,-8.87882 14.3322,-15.1916 2.77689,-6.31276 4.16232,-16.9384 4.16232,-31.9131 0,-13.5833 0.12248,-21.681 0.421654,-24.3555 0.425669,-4.66831 1.57016,-7.91303 3.49972,-9.77031 1.90346,-1.81913 5.67626,-2.74677 11.2581,-2.74677l2.74677 0 0 -16.3983 -4.95343 0c-5.7626,0 -9.95504,0.534094 -12.5512,1.67457 -3.7728,1.53402 -6.87697,4.09807 -9.35067,7.7022 -2.4737,3.63827 -4.1061,8.19815 -4.82894,13.6937 -0.724843,5.52366 -1.14449,14.5491 -1.20673,27.0601 -0.0301181,12.5532 -0.544134,21.1831 -1.4778,25.9618 -0.965787,4.77874 -2.86925,8.55756 -5.70638,11.3405 -2.86323,2.7789 -6.57378,4.24063 -11.1015,4.3852z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
	v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
	h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z"
          stroke-width="18"
          fill="none"
        />
      </svg>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m 31.674539,98.50831 -21.506585,9.19179 v -3.96465 L 27.20046,96.669951 10.167954,89.670898 v -3.964654 l 21.506585,9.08105 z"
          stroke-width="18"
          fill="none"
        />
      </svg>
    </Box>
  );
};

export default CodeBrackets;
