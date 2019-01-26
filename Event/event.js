function tampilKota(provinsi)
{
    var kota = "";
    switch(provinsi)
    {
        case "Jabar" :
        {
            kota = "<ul><li>Bandung</li><liBogor</li><li>Cianjur</li><li>Cirebon</li><li>Subang</li><li>Sumedang</li></ul>";
        }break;
        default : kota ="";
    }
    document.getElementById('kota').innerHTML = kota;
}
