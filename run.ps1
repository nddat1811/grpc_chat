for ($i = 1; $i -le 5; $i++) {
    Start-Process npm -ArgumentList "run client"
}
