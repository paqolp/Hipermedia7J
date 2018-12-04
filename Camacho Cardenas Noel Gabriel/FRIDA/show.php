<?php
// Include the database configuration file
include 'config.php';

// Get images from the database
$query = $db->query("SELECT * FROM images ORDER BY uploaded_on DESC");

if($query->num_rows > 0){
    while($row = $query->fetch_assoc()){
        $imageURL = 'uploads/'.$row["file_name"];
?>
    <!-- <img src="" alt="" /> -->
    <a href="<?php echo $imageURL; ?>">ERCHIVE</a>
<?php }
}else{ ?>
    <p>No image(s) found...</p>
<?php } ?>