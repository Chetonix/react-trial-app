import React from 'react'

export default function TextForm() {
  return (
    <form>
        <div class="form-floating" style={{marginTop: "30px"}}>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Add Text</label>
        </div>
    </form>
  )
}
