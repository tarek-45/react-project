import React from 'react';

function TextForm(props) {
    return (

<div class="mb-3">
<label for="myBox" class="form-label">{props.heading}</label>
<textarea class="form-control" id="myBox" rows="3"></textarea>
</div>
    );
}

export default TextForm;