<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Справочники ученых</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="container">
    <h1>Справочники ученых</h1>
    <div class="row">
      <div class="col-md-3">
        <h3>Фильтры</h3>
        <form id="filterForm">
          <div class="form-group">
              <label for="yearFilter">Год:</label>
              <div class="input-group">
                  <input type="text" class="form-control datepicker" id="yearFilter">
                  <div class="input-group-append">
                      <span class="input-group-text">
                          <i class="fas fa-calendar-alt" id="yearCalendarBtn" style="cursor: pointer;"></i>
                      </span>
                  </div>
              </div>
          </div>
          <div class="form-group">
            <label for="professionFilter">Профессия:</label>
            <input type="text" class="form-control" id="professionFilter">
          </div>
          <button type="button" class="btn btn-primary" onclick="applyFilters()">Применить</button>
        </form>
      </div>
      <div class="col-md-9">
        <h3>Список ученых</h3>
        <table class="table">
          <style>
            .table img {
              max-width: 100px;
              height: auto;
            }
          </style>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Год</th>
              <th>Направление</th>
              <th>Фотография</th>
            </tr>
          </thead>
          <tbody id="scientistTable">
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script>
    const scientistsData = [
      { name: 'Михаил Ломоносов', year: 1711, profession: 'Естествознание', photo: 'lomonosov.jpg' },
      { name: 'Альберт Эйнштейн', year: 1879, profession: 'Физика', photo: 'Einstein.jpg' },
      { name: 'Джу́лиус Ро́берт О́ппенге́ймер', year: 1904, profession: 'Физика', photo: 'Oppenheimer.jpg' },
      { name: 'Константи́н Эдуа́рдович Циолко́вский', year: 1957, profession: 'Теоретическая космонавтика', photo: 'Константин_Циолковский.jpg' },
      { name: 'Дмитрий Иванович Менделеев', year: 1834, profession: 'Химия', photo: 'DIMendeleevCab.jpg' },
    ];
    // Добавьте вызов Date Picker к полю ввода года
    $(function () {
        $(".datepicker").datepicker({
            changeYear: true,
            yearRange: "1700:2050",
            dateFormat: "yy",
        });

        // Добавьте обработчик события на иконку календаря
        $("#yearCalendarBtn").click(function() {
            $(".datepicker").datepicker("show");
        });
    });

        function applyFilters() {
            const yearFilter = document.getElementById('yearFilter').value;
            const professionFilter = document.getElementById('professionFilter').value;

            // Фильтрация данных на основе заданных критериев
            const filteredScientists = scientistsData.filter(scientist => {
                return (!yearFilter || scientist.year.toString() === yearFilter) &&
                    (!professionFilter || scientist.profession.toLowerCase().includes(professionFilter.toLowerCase()));
            });

            // Очистка и обновление таблицы
            const scientistTable = document.getElementById('scientistTable');
            scientistTable.innerHTML = '';

            // Вывод данных ученых, соответствующих фильтрам
            filteredScientists.forEach(scientist => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${scientist.name}</td>
                    <td>${scientist.year}</td>
                    <td>${scientist.profession}</td>
                    <td><img src="${scientist.photo}" alt="${scientist.name}"></td>
                `;
                scientistTable.appendChild(row);
            });
        }

        applyFilters();
    </script>


    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
