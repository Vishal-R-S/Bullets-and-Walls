function hasCollided(bullet,wall)
{
    var bullet_right_edge = bullet.x+bullet.width;
    var wall_left_edge = wall.x;
    if(bullet_right_edge >= wall_left_edge)
    {
        return true;
    }
    else
    {
        return false;
    }
}