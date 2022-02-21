# Sequelize Laundry App
Setting sequelize projek aplikasi laundry

<br>

<h2>Membuat Tabel & Relasi dengan SEQUELIZE pada folder migrations dengan ketik command </h2>


<b>Tabel Outlet:</b><br>
sequelize model:create --name outlet --attributes nama:string,alamat:text,tlp:string

<b>Tabel Paket :</b><br>
sequelize model:create --name paket --attributes id_outlet:integer,jenis:enum,nama_paket:string,harga:integer

<b>Tabel Member :</b><br>
sequelize model:create --name member --attributes nama_member:string,alamat:text,jenis_kelamin:enum,tlp:string

<b>Tabel User :</b><br>
sequelize model:create --name user --attributes nama_user:string,username:string,password:string,role:enum,id_outlet:integer

<b>Tabel Transaksi :</b><br>
sequelize model:create --name transaksi --attributes id_outlet:integer,id_member:integer,tgl:date,batas_waktu:date,tgl_bayar:date,status:enum,dibayar:enum,id_user:integer,id_paket:integer

<b>Tabel DetailcTransaksi :</b><br>
sequelize model:create --name detail_transaksi --attributes id_transaksi:integer,id_paket:integer,qty:integer,keterangan:text

<br>
<h2>Hasilnya berupa database sebagai berikut</h2>

![sequelizelaundry](https://user-images.githubusercontent.com/65702027/154906478-ad7a6f85-c36e-4a83-9b52-af1ae7aa091f.PNG)



