var m = +prompt("Введите m:"),
	    n = +prompt("Введите n:"),
	    M = m, N = n;
	for (var i = 2; i <= m; i++) {
		if (m % i === 0 &&  n % i === 0)
			M = m / i, N = n / i;
	}
	alert([M, N]);
