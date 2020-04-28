# CMPM163Labs
LAB 2

Video link: https://drive.google.com/file/d/1m5nucruO322vmzvCRUerzdWkt91hp_HF/view?usp=sharing 
<img src = "images/lab2_picture.PNG">

Lab 3 
Video link: https://drive.google.com/file/d/14uFCJ4-ke_LY3TqY6q_JE7hgi7HuosXa/view?usp=sharing

A total of 5 cubes in video:
In row 1(left to right), the first cube is composed of red and golden yellow( color interpolated) with a my own sfragment shader; the second cube is Three.js phong material with 50% opacity and is composed of the colors lavender and pink highlight.
In row2, first cube is interpolated with red and blue using example code with shaders we made. Second cube, is made of phong material and is a grey cube with a green specular highlight. The third cube is color interpolated with aquamarine and perano( a type of purple) with the shaders we made.

LAB 4 README:
1) To get x value when given u value of uv coordinate, I realized you are essentially mutliplying the width of x of your texture map( which in this cas will be 8X8) and take that width and multiply with u value to get our x coordinate. So, our formula would be: u * width_of_x =x.
2) With same reasoning as 1, y will be focusing on height, and the formula will be y = height_of_y*v .
3) The color sampled from texture from uv coordinate of (0.375. 0.25) would be (3,2) in x,y coordinate which is white.

A total of 5 cubes were made:
The top cube was made with a texture and I attempted tiling but couldn't figure it out. I was able to scale down the texture but wasn't sure how to get it to repeat itself. First cube on the bottom was made with three,js functionality using a brick texture. Next cube after that uses three.js to make brick cube with normal map.  The third cube mixes I mixed the pairs given in file to see what the texture would result with a different normal map. Last,cube makes a texture with shaders.
Part 1 Texture A (uses three.js built in texture functionality)
Part 1 Texture A & Normal Map A (uses three.js built in texture functionality)
Part 1 Texture B & Normal Map B (new texture/normal map combo using built in three.js functionality)
Part 2 Texture C (load this texture with shaders, as we worked through in the lab together)
Part 2 Texture D (tile this texture at least by showing a 2x2 grid) 
https://drive.google.com/file/d/1kAobf1Gp29cGIfMij3gekrBAxpgCEVSD/view?usp=sharing


