<?php
$target_dir = "real_imgs/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
       //$msg = "File is an image - " . $check["mime"] . ".";
       //echo "<script type='text/javascript'>alert('$msg');</script>";
    $uploadOk = 1;
  } else {
    $msg= "File is not an image.";
    $uploadOk = 0;
    echo "<script type='text/javascript'>alert('$msg');</script>";
  }
}
// Check if file already exists
if (file_exists($target_file)) {
  $msg= "Sorry, file already exists.";
  echo "<script type='text/javascript'>alert('$msg');</script>";
  $uploadOk = 1;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  $msg= "img size exceded";
  echo "<script type='text/javascript'>alert('$msg');</script>";
  $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $msg ="Formatos admitidos: JPG, JPEG, PNG & GIF";
    echo "<script type='text/javascript'>alert('$msg');</script>";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  $msg = "Sorry, your file was not uploaded.";
   echo "<script type='text/javascript'>alert('$msg');</script>";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    $msg =  "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";

        header("Location: /websocket-client/img_processing.html");
        echo "<script type='text/javascript'>alert('$msg');</script>";

  } else {
    $msg =  "error en la subida del archivo.";
    echo "<script type='text/javascript'>alert('$msg');</script>";
  }
}
?>
