import { Box } from '@chakra-ui/react';
import './index.scss';
const CodeBrackets = () => {
  return (
    <Box
      className="wrap floating-elements"
      position={{ base: 'absolute' }}
      top={'-49px'}
      left={{ base: 0, md: '50%' }}
      height={{ base: 'calc(100vh - 90px)', md: 'inherit' }}
      width={{ base: '92vw', md: '50%' }}
      overflow={{ base: 'hidden' }}
    >
      {/* react */}
      <svg
        class="svg"
        width="256px"
        height="256px"
        viewBox="0 -14 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
            fill="#00D8FF"
          ></path>
        </g>
      </svg>

      {/* sass */}
      <svg
        class="svg"
        width="240px"
        height="240px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 15.144531 5.0136719 C 13.731238 4.939082 12.142266 5.1556875 10.587891 5.6953125 C 8.1178906 6.5523125 5.4463906 7.90025 3.5253906 9.65625 C 1.2433906 11.74625 0.87734375 13.565172 1.0273438 14.326172 C 1.5613438 17.025172 5.367625 18.785891 6.890625 20.087891 C 6.815625 20.128891 6.7456875 20.164172 6.6796875 20.201172 C 5.9156875 20.572172 3.0814688 22.029656 2.3554688 23.597656 C 1.5354688 25.375656 2.4911406 26.648266 3.1191406 26.822266 C 5.0781406 27.354266 7.01675 26.424516 8.09375 24.853516 C 9.17175 23.281516 9.0419219 21.229922 8.5449219 20.294922 C 8.5399219 20.280922 8.5303906 20.271812 8.5253906 20.257812 C 8.7223906 20.142813 8.923 20.027109 9.125 19.912109 C 9.514 19.687109 9.8935625 19.481734 10.226562 19.302734 C 10.038562 19.797734 9.9030312 20.394859 9.8320312 21.255859 C 9.7480313 22.263859 10.173563 23.568031 10.726562 24.082031 C 10.970562 24.307031 11.265266 24.3125 11.447266 24.3125 C 12.094266 24.3125 12.385031 23.790016 12.707031 23.166016 C 13.105031 22.405016 13.457031 21.521484 13.457031 21.521484 C 13.457031 21.521484 13.017656 23.912109 14.222656 23.912109 C 14.662656 23.912109 15.103781 23.358219 15.300781 23.074219 L 15.300781 23.078125 C 15.300781 23.078125 15.308031 23.060437 15.332031 23.023438 C 15.379031 22.954438 15.402344 22.914063 15.402344 22.914062 L 15.402344 22.900391 C 15.580344 22.602391 15.970641 21.919969 16.556641 20.792969 C 17.315641 19.335969 18.041016 17.515625 18.041016 17.515625 C 18.111016 17.915625 18.208031 18.310266 18.332031 18.697266 C 18.463031 19.132266 18.740938 19.609266 18.960938 20.072266 C 18.782937 20.310266 18.673828 20.447266 18.673828 20.447266 C 18.673828 20.451266 18.676687 20.455031 18.679688 20.457031 C 18.538688 20.640031 18.378844 20.836297 18.214844 21.029297 C 17.614844 21.726297 16.901594 22.524906 16.808594 22.753906 C 16.695594 23.023906 16.724453 23.224859 16.939453 23.380859 C 17.098453 23.499859 17.381781 23.518094 17.675781 23.496094 C 18.214781 23.459094 18.594344 23.330047 18.777344 23.248047 C 19.114344 23.130047 19.432656 22.967672 19.722656 22.763672 C 20.308656 22.341672 20.665812 21.736453 20.632812 20.939453 C 20.613813 20.499453 20.467062 20.058484 20.289062 19.646484 C 20.341062 19.573484 20.398219 19.495969 20.449219 19.417969 C 21.377219 18.093969 22.09375 16.640625 22.09375 16.640625 C 22.16375 17.040625 22.260766 17.435266 22.384766 17.822266 C 22.497766 18.193266 22.717922 18.601 22.919922 19 C 22.048922 19.692 21.508313 20.494484 21.320312 21.021484 C 20.973312 21.997484 21.246813 22.436109 21.757812 22.537109 C 21.987813 22.583109 22.314594 22.478906 22.558594 22.378906 C 22.920594 22.260906 23.261313 22.089141 23.570312 21.869141 C 24.156312 21.447141 24.723547 20.856688 24.685547 20.054688 C 24.671547 19.692688 24.569594 19.330422 24.433594 18.982422 C 25.169594 18.680422 26.12475 18.515344 27.34375 18.652344 C 29.95375 18.950344 30.465187 20.544984 30.367188 21.208984 C 30.269188 21.873984 29.720109 22.245469 29.537109 22.355469 C 29.354109 22.465469 29.2985 22.506844 29.3125 22.589844 C 29.3355 22.708844 29.419219 22.703781 29.574219 22.675781 C 29.790219 22.638781 30.942141 22.135344 30.994141 20.902344 C 31.069103 19.345129 29.53861 17.63228 26.826172 17.644531 L 26.822266 17.644531 C 25.880607 17.645115 24.95225 17.856237 24.107422 18.263672 C 23.830422 17.718672 23.544047 17.241766 23.498047 16.884766 C 23.442047 16.467766 23.382266 16.220562 23.447266 15.726562 C 23.513266 15.231563 23.807734 14.529516 23.802734 14.478516 C 23.797734 14.428516 23.736813 14.176875 23.132812 14.171875 C 22.528812 14.166875 22.007266 14.286406 21.947266 14.441406 C 21.840266 14.726406 21.757219 15.018406 21.699219 15.316406 C 21.591219 15.852406 20.490187 17.768578 19.867188 18.767578 C 19.661188 18.377578 19.488172 18.034766 19.451172 17.759766 C 19.395172 17.342766 19.333437 17.095562 19.398438 16.601562 C 19.464437 16.106562 19.760859 15.404516 19.755859 15.353516 C 19.750859 15.303516 19.689938 15.051875 19.085938 15.046875 C 18.481938 15.041875 17.959437 15.161406 17.898438 15.316406 C 17.837438 15.472406 17.771391 15.838406 17.650391 16.191406 C 17.528391 16.544406 16.061734 19.735453 15.677734 20.564453 C 15.480734 20.986453 15.311453 21.325688 15.189453 21.554688 C 15.170453 21.591687 15.157437 21.614813 15.148438 21.632812 C 15.162437 21.609813 15.171875 21.586703 15.171875 21.595703 C 15.068875 21.792703 15.007813 21.902344 15.007812 21.902344 L 15.007812 21.90625 C 14.927812 22.05325 14.838875 22.1875 14.796875 22.1875 C 14.768875 22.1875 14.707547 21.802391 14.810547 21.275391 C 15.030547 20.166391 15.551875 18.442813 15.546875 18.382812 C 15.541875 18.350812 15.643125 18.052578 15.203125 17.892578 C 14.776125 17.741578 14.623937 17.994141 14.585938 17.994141 C 14.547937 17.994141 14.519531 18.085938 14.519531 18.085938 C 14.519531 18.085938 14.991375 16.142578 13.609375 16.142578 C 12.746375 16.142578 11.546031 17.06825 10.957031 17.90625 C 10.587031 18.10325 9.7854063 18.530375 8.9414062 18.984375 C 8.6184062 19.158375 8.2866562 19.336859 7.9726562 19.505859 C 7.9496563 19.482859 7.93025 19.4605 7.90625 19.4375 C 6.22825 17.6865 3.1307188 16.448656 3.2617188 14.097656 C 3.3087188 13.240656 3.61475 10.991766 9.21875 8.2597656 C 13.81275 6.0237656 17.485188 6.6369531 18.117188 8.0019531 C 19.026187 9.9499531 16.152813 13.575656 11.382812 14.097656 C 9.5648125 14.294656 8.7272813 13.526531 8.4882812 13.269531 C 8.2402813 12.999531 8.2014219 12.985156 8.1074219 13.035156 C 7.9524219 13.117156 8.0514219 13.356047 8.1074219 13.498047 C 8.2484219 13.860047 8.8750469 14.427047 9.8730469 14.748047 C 10.750047 15.028047 12.763797 15.263109 15.341797 14.287109 C 18.237797 13.196109 20.450062 10.232453 19.789062 7.6894531 C 19.368437 6.0738281 17.50002 5.1379883 15.144531 5.0136719 z M 13.607422 17.289062 C 13.680719 17.294469 13.735125 17.321547 13.765625 17.373047 C 13.929625 17.644047 13.195813 19.638891 13.007812 20.087891 C 12.707812 20.807891 12.074453 22.641922 11.689453 22.544922 C 11.361453 22.462922 11.159047 21.064453 11.623047 19.689453 C 11.857047 18.997453 12.354391 18.172563 12.650391 17.851562 C 13.005141 17.463062 13.387531 17.272844 13.607422 17.289062 z M 23.347656 19.550781 C 23.402656 19.710781 23.431547 19.878875 23.435547 20.046875 C 23.430547 21.078875 22.676656 21.463047 22.222656 21.623047 C 22.128656 21.559047 22.141078 21.342828 22.455078 20.673828 C 22.577078 20.412828 22.859656 19.972781 23.347656 19.550781 z M 7.6035156 20.6875 C 7.9925156 22.0805 7.6179844 23.309344 6.7089844 24.277344 C 5.8469844 25.198344 4.6371875 25.546906 4.1171875 25.253906 C 3.5591875 24.936906 3.77975 23.579656 4.84375 22.597656 C 5.49075 22.001656 6.3259063 21.452281 6.8789062 21.113281 C 7.0059062 21.040281 7.1871094 20.929875 7.4121094 20.796875 C 7.4501094 20.773875 7.46875 20.765625 7.46875 20.765625 C 7.51075 20.738625 7.5565156 20.7155 7.6035156 20.6875 z M 19.380859 20.847656 C 19.380859 20.870656 19.386719 20.894875 19.386719 20.921875 C 19.380719 21.741875 18.573031 22.295625 18.207031 22.515625 L 18.210938 22.515625 L 18.210938 22.517578 C 18.083938 22.581578 17.966156 22.621844 17.910156 22.589844 C 17.868156 22.566844 17.962891 22.480469 17.962891 22.480469 C 17.962891 22.480469 18.614094 21.796375 18.871094 21.484375 C 19.021094 21.301375 19.193859 21.085656 19.380859 20.847656 z" />
      </svg>

      {/* js */}
      <svg
        class="svg"
        width="130px"
        height="130px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <rect width="24" height="24" fill="#F1DC50" />
          <path
            stroke="#333"
            stroke-width="2"
            d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"
          />
        </g>
      </svg>

      {/* jest */}
      <svg
        class="svg"
        width="120px"
        height="120px"
        viewBox="-13.5 0 283 283"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M239.552674,138.960457 C239.552674,124.451866 227.791431,112.690623 213.282197,112.690623 C212.349305,112.690623 211.428604,112.740668 210.521375,112.835625 L246.60326,6.41597594 L93.2669594,6.41597594 L129.298799,112.743234 C128.770117,112.711154 128.238869,112.690623 127.702488,112.690623 C113.193897,112.690623 101.432012,124.451866 101.432012,138.960457 C101.432012,150.688337 109.117786,160.616517 119.725426,163.994562 C114.122939,173.699465 107.072994,182.440036 99.0689845,189.991715 C88.1854556,200.259304 75.7293554,208.044527 62.2569544,212.842442 C46.2174957,204.602322 38.6427188,186.27747 45.4777263,170.20978 C46.2489343,168.395324 47.0374657,166.556487 47.7900672,164.725349 C59.410799,162.013289 68.0692451,151.596207 68.0692451,139.149089 C68.0692451,124.640497 56.308002,112.879254 41.7987689,112.879254 C27.2901774,112.879254 15.5282927,124.640497 15.5282927,139.149089 C15.5282927,148.046212 19.9553604,155.904577 26.7217163,160.656938 C20.2197013,175.461309 10.6617263,190.954763 7.68404211,208.911976 C4.1154406,230.432658 7.67249323,253.276327 26.2854256,266.177059 C69.6334757,296.220808 116.687431,247.551936 166.299461,235.317831 C184.279771,230.883705 204.016152,231.598452 219.857355,222.423515 C231.753335,215.533329 239.595661,204.115344 241.821385,191.296096 C244.020162,178.632116 240.814709,166.023314 233.442679,155.799354 C237.255731,151.239475 239.552674,145.36944 239.552674,138.960457"
            fill="#99425B"
          ></path>
          <path
            d="M235.500174,190.198183 C233.567663,201.327447 226.694159,211.049031 216.641508,216.871587 C207.270881,222.298915 196.041528,223.918965 184.152606,225.633331 C177.783403,226.551467 171.197337,227.501682 164.763332,229.088369 C147.751202,233.283176 131.273528,241.468118 115.338651,249.382945 C83.4490065,265.222865 55.908796,278.900579 29.9405153,260.903587 C10.9188812,247.719908 11.7972371,223.328048 14.0133373,209.961512 C16.0671118,197.577913 21.6195529,186.173402 26.9891368,175.143587 C27.9168962,173.23674 28.8260491,171.365181 29.7108211,169.509662 C32.3721945,170.5728 35.2029514,171.298454 38.1536882,171.628239 C32.6878637,189.666935 41.2834326,209.28077 59.3253373,218.549381 L61.7942296,219.817833 L64.4094075,218.886865 C78.6722647,213.807286 91.8148812,205.656349 103.472184,194.657973 C111.007182,187.549001 117.486099,179.684219 122.810771,171.280489 C124.407082,171.521091 126.039964,171.647487 127.70236,171.647487 C144.260876,171.647487 157.973237,159.268379 160.095022,143.280249 C166.872926,143.031948 174.072365,143.030023 180.889408,143.277682 C183.009909,159.267096 196.722911,171.647487 213.282069,171.647487 C220.205618,171.647487 226.628074,169.477582 231.918741,165.791567 C235.591924,173.310524 236.963032,181.770715 235.500174,190.198183 Z M41.7986406,119.295166 C52.7469714,119.295166 61.6530767,128.201913 61.6530767,139.149602 C61.6530767,143.081993 60.4994727,146.74876 58.5181995,149.8368 C55.2171469,154.983747 49.6088862,158.511928 43.1626907,158.952068 C42.7116431,158.982865 42.2573875,159.004038 41.7986406,159.004038 C39.3592622,159.004038 37.0218987,158.558765 34.8609764,157.750985 C30.4897283,156.114895 26.8473424,152.978735 24.5561744,148.973843 C22.8976281,146.074434 21.9442045,142.722053 21.9442045,139.149602 C21.9442045,128.201913 30.8509514,119.295166 41.7986406,119.295166 Z M107.847924,138.96097 C107.847924,129.014183 115.200706,120.754815 124.755473,119.326605 C125.717237,119.182244 126.701458,119.106534 127.70236,119.106534 C134.067072,119.106534 139.733718,122.122073 143.368405,126.794234 C144.271783,127.954895 145.055182,129.214364 145.685879,130.559166 C146.883753,133.11275 147.556796,135.958905 147.556796,138.96097 C147.556796,140.548299 147.364315,142.091356 147.010791,143.571537 C145.075713,151.671787 138.168846,157.862625 129.705448,158.714675 C129.047162,158.78076 128.378611,158.815407 127.70236,158.815407 C123.73853,158.815407 120.045458,157.643196 116.942019,155.633692 C111.475553,152.09268 107.847924,145.944188 107.847924,138.96097 Z M190.713007,115.351868 C186.459814,119.421562 183.296706,124.621121 181.721568,130.468058 C174.369428,130.192168 166.573297,130.192168 159.263503,130.468058 C157.584425,124.236158 154.101798,118.738254 149.417448,114.562053 L169.961608,73.0201183 L190.713007,115.351868 Z M102.215924,12.8325293 L237.652756,12.8325293 L205.664305,107.177833 C204.277798,107.510825 202.925297,107.929792 201.612575,108.433452 L170.012295,43.9702135 L138.322831,108.048489 C136.953007,107.57691 135.541478,107.197081 134.096585,106.909001 L102.215924,12.8325293 Z M233.136505,138.96097 C233.136505,140.951868 232.838801,142.873472 232.291513,144.687928 C230.987773,149.00464 228.251974,152.703487 224.639102,155.23269 C221.41825,157.487286 217.503182,158.815407 213.282069,158.815407 C204.114831,158.815407 196.381578,152.568108 194.108375,144.107918 C193.666951,142.465412 193.427633,140.74078 193.427633,138.96097 C193.427633,136.246985 193.976205,133.659396 194.966199,131.301502 C195.476275,130.086304 196.112746,128.937833 196.843533,127.858655 C200.416626,122.585311 206.44642,119.106534 213.282069,119.106534 C213.908916,119.106534 214.527423,119.139256 215.139513,119.196359 C225.219753,120.135667 233.136505,128.639487 233.136505,138.96097 Z M245.968585,138.96097 C245.968585,123.002995 234.471042,109.688429 219.327262,106.843557 L255.552866,0.000449122807 L84.3183799,0.000449122807 L120.599162,107.061061 C105.980856,110.313993 95.0158436,123.377051 95.0158436,138.96097 C95.0158436,150.662544 101.200265,160.941682 110.468235,166.717402 C106.01037,173.359286 100.723553,179.609151 94.6661694,185.324559 C85.0581494,194.388499 74.3549113,201.262003 62.8156632,205.78467 C51.1930065,198.483858 46.279603,184.715677 51.3822797,172.72089 L51.781999,171.78094 C52.0322246,171.193873 52.2824501,170.605522 52.5320341,170.017171 C65.2980291,165.564439 74.4851569,153.413742 74.4851569,139.149602 C74.4851569,121.125662 59.8219388,106.463086 41.7986406,106.463086 C23.7753424,106.463086 9.11212431,121.125662 9.11212431,139.149602 C9.11212431,148.246905 12.8513925,156.485101 18.8696381,162.41673 C17.7789113,164.741261 16.6304401,167.105572 15.4518135,169.526344 C9.94941754,180.828198 3.71302657,193.637823 1.35449023,207.862183 C-3.32986065,236.112008 4.22630977,258.694544 22.6307208,271.450274 C33.7991218,279.190584 45.1401143,282.233712 56.553608,282.233712 C78.0447759,282.233712 99.7842446,271.4368 121.047002,260.875356 C136.360164,253.269782 152.194951,245.404359 167.835974,241.547036 C173.655322,240.111767 179.644054,239.248168 185.984385,238.333883 C198.556616,236.520068 211.557438,234.645301 223.072946,227.975828 C236.421518,220.243858 245.559242,207.274474 248.142981,192.393752 C250.361007,179.618775 247.691934,166.823266 241.181578,155.972459 C244.216365,151.013502 245.968585,145.188379 245.968585,138.96097 Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
      {/* typescript */}
      <svg
        class="svg"
        width="70px"
        height="70px"
        viewBox="0 0 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <polygon
            fill="#007ACC"
            transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) "
            points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
          ></polygon>
          <path
            d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
            fill="#FFFFFF"
            transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) "
          ></path>
          <path
            d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
            fill="#FFFFFF"
            transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) "
          ></path>
        </g>
      </svg>
      {/* ether */}

      <svg
        class="svg"
        width="80px"
        height="80px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="16" cy="16" r="16" fill="#627EEA" />
          <g fill="#FFF" fill-rule="nonzero">
            <path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
            <path d="M16.498 4L9 16.22l7.498-3.35z" />
            <path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
            <path d="M16.498 27.995v-6.028L9 17.616z" />
            <path
              fill-opacity=".2"
              d="M16.498 20.573l7.497-4.353-7.497-3.348z"
            />
            <path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
          </g>
        </g>
      </svg>
      {/* git */}
      <svg
        class="svg"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>file_type_git</title>
        <path d="M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551" />
        <path d="M12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314" />
      </svg>
    </Box>
  );
};

export default CodeBrackets;
