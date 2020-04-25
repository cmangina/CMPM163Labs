


varying vec3 vUv;
//uniform vec2 u_resolution;
//uniform float u_time;


uniform vec3 colorA;
uniform vec3 colorB;

void main() {
 
gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);


}


 

