# Ultimate Search Engine
#### ***Front-End Webová aplikace***

---

### Instalace

#### Instalace závislostí

Před prvním spuštěním serveru je zapotřebí stáhnout všechny balíčky

```
npm i
```

#### Spuštění aplikace

Jako vývojář

```
npm run dev
```

Nebo aplikaci prvě postavíme

```
npm run build
```

```
npm run start
```

---

### Docker

#### Jak aplikaci spustit v Dockeru

Prvně Docker image vytvoříme

```
docker build -t se-front_end .
```

A poté spustíme

```
docker run -p 80:80 se-front_end
```