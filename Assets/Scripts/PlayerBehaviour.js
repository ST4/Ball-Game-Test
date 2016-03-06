#pragma strict
public var jumpHeight = 0;
public var moveSpeed = 0;

private var canJump = true;
private var facingRight = true; //the spirte faces right at the beginning of the game
private var facingLeft = false;

function Start () {

}

// This is a comment
function Update () {
    var x;
    var y;

    if(Input.GetKeyDown(KeyCode.Space) && canJump) {
        x = GetComponent(Rigidbody2D).velocity.x;

        GetComponent(Rigidbody2D).velocity = new Vector2(x, jumpHeight);
        canJump = false;
    }

    if(Input.GetKey(KeyCode.D)) {
        y = GetComponent(Rigidbody2D).velocity.y;

        GetComponent(Rigidbody2D).velocity = new Vector2(moveSpeed, y);

        if (!facingRight) {
            Flip();
        }
    }


    if(Input.GetKey(KeyCode.A)) {
        y = GetComponent(Rigidbody2D).velocity.y;
        GetComponent(Rigidbody2D).velocity = new Vector2(-moveSpeed, y);
        if (facingRight) {
            Flip();
        }
    }

    if (Input.GetKey(KeyCode.None)) {
        GetComponent(Rigidbody2D).velocity = new Vector2(0, 0);
    }
}



function OnCollisionEnter2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("Ground")) {
        canJump = true;
            }
}



    function Flip() {
        var flipScale : Vector3;
        var rigidbody : Rigidbody2D;

        rigidbody = GetComponent(Rigidbody2D);

        flipScale = rigidbody.transform.localScale;
        flipScale.x *= -1; //flip sprite horizontally

        rigidbody.transform.localScale = flipScale;

        facingRight = !facingRight;
    }
