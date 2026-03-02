//shifts.js

  db.shifts.insertMany([
  {
	"staffID": "ST0003",
        "date": "2012-06-23",
        "status": "completed",
        "startTime": "16:00",
        "endTime": "04:00",
        "surgeries": [{ "surgeryID": "S0009", "scheduledTime": "16:30" }],
        "clockIn": { "date": "2012-06-23", "time": "16:00" },
        "lunchClockIn": { "date": "2012-06-23", "time": "22:00" },
        "lunchClockOut": { "date": "2012-06-23", "time": "22:30" },
        "clockOut": { "date": "2012-06-24", "time": "04:00" }
      },
      {
	"staffID": "ST0003",
        "date": "2015-10-10",
        "status": "completed",
        "startTime": "08:00",
        "endTime": "20:00",
        "surgeries": [{ "surgeryId": "S0006", "scheduledTime": "08:45" }],
        "clockIn": { "date": "2015-10-10", "time": "07:50" },
        "lunchClockIn": { "date": "2015-10-10", "time": "14:00" },
        "lunchClockOut": { "date": "2015-10-10", "time": "14:30" },
        "clockOut": { "date": "2015-10-11", "time": "20:00" }
      },
      {
	"staffID": "ST0003",
        "date": "2016-02-20",
        "status": "completed",
        "startTime": "14:00",
        "endTime": "02:00",
        "surgeries": [{ "surgeryId": "S0005", "scheduledTime": "15:00" }],
        "clockIn": { "date": "2016-02-20", "time": "14:00" },
        "lunchClockIn": { "date": "2016-02-20", "time": "20:00" },
        "lunchClockOut": { "date": "2016-02-20", "time": "20:30" },
        "clockOut": { "date": "2016-02-21", "time": "02:00" }
      },
      {
	"staffID": "ST0003",
        "date": "2018-11-12",
        "status": "completed",
        "startTime": "08:15",
        "endTime": "20:15",
        "surgeries": [{ "surgeryId": "S0003", "scheduledTime": "10:15" }],
        "clockIn": { "date": "2018-11-12", "time": "08:15" },
        "lunchClockIn": { "date": "2018-11-12", "time": "14:15" },
        "lunchClockOut": { "date": "2018-11-12", "time": "14:45" },
        "clockOut": { "date": "2018-11-12", "time": "20:15" }
      },
      {
	"staffID": "ST0003",
        "date": "2020-01-10",
        "status": "completed",
        "startTime": "12:00",
        "endTime": "00:00",
        "surgeries": [{ "surgeryId": "S0001", "scheduledTime": "14:00" }],
        "clockIn": { "date": "2020-01-10", "time": "12:00" },
        "lunchClockIn": { "date": "2020-01-10", "time": "17:00" },
        "lunchClockOut": { "date": "2020-01-10", "time": "17:30" },
        "clockOut": { "date": "2020-01-11", "time": "00:00" }
      },
      {
	"staffID": "ST0003",
        "date": "2025-11-01",
        "status": "scheduled",
        "startTime": "08:30",
        "endTime": "20:30",
     	"surgeries": [{ "surgeryId": "S0011", "scheduledTime": "09:00" }],
      },
      {
	"staffID": "ST0003",
        "date": "2025-11-05",
        "status": "scheduled",
        "startTime": "08:30",
        "endTime": "20:30",
        "surgeries": [{ "surgeryId": "S0015", "scheduledTime": "09:30" }],
      },
      {
	"staffID": "ST0003",
        "date": "2025-11-07",
        "status": "scheduled",
        "startTime": "08:30",
        "endTime": "20:30",
        "surgeries": [{ "surgeryId": "S0017", "scheduledTime": "14:00" }],
      },
      {
	"staffID": "ST0003",
        "date": "2025-11-09",
        "status": "scheduled",
        "startTime": "08:30",
        "endTime": "20:30",
        "surgeries": [{ "surgeryId": "S0019", "scheduledTime": "08:30" }],
      },
      {
	"staffID": "ST0004",
        "date": "2011-12-01",
        "status": "completed",
        "startTime": "07:00",
        "endTime": "19:00",
        "surgeries": [{ "surgeryId": "S0010", "scheduledTime": "09:00" }],
        "clockIn": { "date": "2011-12-01", "time": "07:00" },
        "lunchClockIn": { "date": "2011-12-01", "time": "13:00" },
        "lunchClockOut": { "date": "2011-12-01", "time": "13:30" },
        "clockOut": { "date": "2011-12-01", "time": "19:00" }
      },
      {
	"staffID": "ST0004",
        "date": "2013-03-05",
        "status": "completed",
        "startTime": "12:20",
        "endTime": "00:20",
        "surgeries": [{ "surgeryId": "S0008", "scheduledTime": "14:20" }],
        "clockIn": { "date": "2013-03-05", "time": "12:20" },
        "lunchClockIn": { "date": "2013-03-05", "time": "18:20" },
        "lunchClockOut": { "date": "2013-03-05", "time": "18:50" },
        "clockOut": { "date": "2013-03-06", "time": "00:20" }
      },
      {
	"staffID": "ST0004",
        "date": "2014-08-14",
        "status": "completed",
        "startTime": "09:00",
        "endTime": "21:00",
        "surgeries": [{ "surgeryId": "S0007", "scheduledTime": "11:00" }],
        "clockIn": { "date": "2014-08-14", "time": "09:00" },
        "lunchClockIn": { "date": "2014-08-14", "time": "15:00" },
        "lunchClockOut": { "date": "2014-08-14", "time": "15:30" },
        "clockOut": { "date": "2014-08-14", "time": "21:00" }
      },
      {
	"staffID": "ST0004",
        "date": "2017-07-05",
        "status": "completed",
        "startTime": "11:00",
        "endTime": "23:00",
        "surgeries": [{ "surgeryId": "S0004", "scheduledTime": "13:00" }],
        "clockIn": { "date": "2017-07-05", "time": "11:00" },
        "lunchClockIn": { "date": "2017-07-05", "time": "17:00" },
        "lunchClockOut": { "date": "2017-07-05", "time": "17:30" },
        "clockOut": { "date": "2017-07-05", "time": "23:00" }
      },
      {
	"staffID": "ST0004",
        "date": "2019-05-22",
        "status": "completed",
        "startTime": "07:30",
        "endTime": "19:30",
        "surgeries": [{ "surgeryId": "S0002", "scheduledTime": "09:30" }],
        "clockIn": { "date": "2019-05-22", "time": "07:30" },
        "lunchClockIn": { "date": "2019-05-22", "time": "13:30" },
        "lunchClockOut": { "date": "2019-05-22", "time": "14:00" },
        "clockOut": { "date": "2019-05-22", "time": "19:30" }
      },
      {
	"staffID": "ST0004",
        "date": "2025-11-02",
        "status": "scheduled",
        "startTime": "08:30",
        "endTime": "20:30",
        "surgeries": [{ "surgeryId": "S0012", "scheduledTime": "10:30" }],
      },
      {
	"staffID": "ST0004",
        "date": "2025-11-04",
        "status": "scheduled",
        "startTime": "11:00",
        "endTime": "23:00",
        "surgeries": [{ "surgeryId": "S0014", "scheduledTime": "13:00" }],
      },
      {
	"staffID": "ST0004",
        "date": "2025-11-06",
        "status": "scheduled",
        "startTime": "09:00",
        "endTime": "21:00",
        "surgeries": [{ "surgeryId": "S0016", "scheduledTime": "11:00" }],
      },
      {
	"staffID": "ST0004",
        "date": "2025-11-08",
        "status": "scheduled",
        "startTime": "08:00",
        "endTime": "20:00",
        "surgeries": [{ "surgeryId": "S0018", "scheduledTime": "10:00" }],
      },
      {
	"staffID": "ST0004",
        "date": "2025-11-10",
        "status": "scheduled",
        "startTime": "13:00",
        "endTime": "01:00",
        "surgeries": [{ "surgeryId": "S0020", "scheduledTime": "15:00" }],
      },
      {
	"staffID": "ST0005",
    	"date": "2013‑03‑05",
    	"status": "completed",
    	"startTime": "12:20",
    	"endTime": "00:20",
    	"surgeries": [{ "surgeryId": "S0008", "scheduledTime": "14:20" }],
    	"clockIn": { "date": "2013‑03‑05", "time": "12:20" },
    	"lunchClockIn": { "date": "2013‑03‑05", "time": "18:20" },
    	"lunchClockOut": { "date": "2013‑03‑05", "time": "18:50" },
    	"clockOut": { "date": "2013‑03‑06", "time": "00:20" }
      },
      {
	"staffID": "ST0005",
    	"date": "2014‑08‑14",
    	"status": "completed",
    	"startTime": "09:00",
    	"endTime": "21:00",
    	"surgeries": [{ "surgeryId": "S0007", "scheduledTime": "11:00" }],
    	"clockIn": { "date": "2014‑08‑14", "time": "09:00" },
    	"lunchClockIn": { "date": "2014‑08‑14", "time": "15:00" },
    	"lunchClockOut": { "date": "2014‑08‑14", "time": "15:30" },
    	"clockOut": { "date": "2014‑08‑14", "time": "21:00" }
      },
      {
	"staffID": "ST0005",
    	"date": "2015‑10‑10",
    	"status": "completed",
    	"startTime": "06:45",
    	"endTime": "18:45",
    	"surgeries": [{ "surgeryId": "S0006", "scheduledTime": "08:45" }],
    	"clockIn": { "date": "2015‑10‑10", "time": "06:45" },
    	"lunchClockIn": { "date": "2015‑10‑10", "time": "12:45" },
    	"lunchClockOut": { "date": "2015‑10‑10", "time": "13:15" },
    	"clockOut": { "date": "2015‑10‑10", "time": "18:45" }
      },
      {
	"staffID": "ST0005",
    	"date": "2016‑02‑20",
    	"status": "completed",
    	"startTime": "13:00",
    	"endTime": "01:00",
    	"surgeries": [{ "surgeryId": "S0005", "scheduledTime": "15:00" }],
    	"clockIn": { "date": "2016‑02‑20", "time": "13:00" },
    	"lunchClockIn": { "date": "2016‑02‑20", "time": "19:00" },
    	"lunchClockOut": { "date": "2016‑02‑20", "time": "19:30" },
    	"clockOut": { "date": "2016‑02‑21", "time": "01:00" }
      },
      {
	"staffID": "ST0005",
    	"date": "2018‑11‑12",
        "status": "completed",
        "startTime": "08:15",
        "endTime": "20:15",
        "surgeries": [{ "surgeryId": "S0003", "scheduledTime": "10:15" }],
        "clockIn": { "date": "2018‑11‑12", "time": "08:15" },
        "lunchClockIn": { "date": "2018‑11‑12", "time": "14:15" },
        "lunchClockOut": { "date": "2018‑11‑12", "time": "14:45" },
        "clockOut": { "date": "2018‑11‑12", "time": "20:15" }
      },
      {
	"staffID": "ST0005",
        "date": "2020‑01‑10",
        "status": "completed",
        "startTime": "12:00",
        "endTime": "00:00",
        "surgeries": [{ "surgeryId": "S0001", "scheduledTime": "14:00" }],
        "clockIn": { "date": "2020‑01‑10", "time": "12:00" },
        "lunchClockIn": { "date": "2020‑01‑10", "time": "18:00" },
        "lunchClockOut": { "date": "2020‑01‑10", "time": "18:30" },
        "clockOut": { "date": "2020‑01‑11", "time": "00:00" }
      },
      {
	"staffID": "ST0005",
        "date": "2025‑11‑01",
        "status": "scheduled",
        "startTime": "07:00",
        "endTime": "19:00",
        "surgeries": [{ "surgeryId": "S0011", "scheduledTime": "09:00" }]
      },
      {
	"staffID": "ST0005",
        "date": "2025‑11‑05",
        "status": "scheduled",
        "startTime": "07:30",
        "endTime": "19:30",
        "surgeries": [{ "surgeryId": "S0015", "scheduledTime": "09:30" }]
      },
      {
	"staffID": "ST0005",
        "date": "2025‑11‑07",
        "status": "scheduled",
        "startTime": "12:00",
        "endTime": "00:00",
        "surgeries": [{ "surgeryId": "S0017", "scheduledTime": "14:00" }]
      },
      {
        "staffID": "ST0007",
        "date": "2012-06-25",
        "status": "completed",
        "startTime": "14:30",
        "endTime": "02:30",
        "surgeries": [{ "surgeryId": "S0009", "scheduledTime": "16:30" }],
        "clockIn": { "date": "2012-06-25", "time": "14:30" },
        "lunchClockIn": { "date": "2012-06-25", "time": "20:30" },
        "lunchClockOut": { "date": "2012-06-25", "time": "21:00" },
        "clockOut": { "date": "2012-06-26", "time": "02:30" }
      },
      {
        "staffID": "ST0007",
        "date": "2017-07-05",
        "status": "completed",
        "startTime": "11:00",
        "endTime": "23:00",
        "surgeries": [{ "surgeryId": "S0004", "scheduledTime": "13:00" }],
        "clockIn": { "date": "2017-07-05", "time": "11:00" },
        "lunchClockIn": { "date": "2017-07-05", "time": "17:00" },
        "lunchClockOut": { "date": "2017-07-05", "time": "17:30" },
        "clockOut": { "date": "2017-07-05", "time": "23:00" }
      },
      {
        "staffID": "ST0007",
        "date": "2019-05-22",
        "status": "completed",
        "startTime": "07:30",
        "endTime": "19:30",
        "surgeries": [{ "surgeryId": "S0002", "scheduledTime": "09:30" }],
        "clockIn": { "date": "2019-05-22", "time": "07:30" },
        "lunchClockIn": { "date": "2019-05-22", "time": "13:30" },
        "lunchClockOut": { "date": "2019-05-22", "time": "14:00" },
        "clockOut": { "date": "2019-05-22", "time": "19:30" }
      },
      {
        "staffID": "ST0007",
        "date": "2025-11-01",
        "status": "scheduled",
        "startTime": "07:00",
        "endTime": "19:00",
        "surgeries": [{ "surgeryId": "S0011", "scheduledTime": "09:00" }]
      },
      {
        "staffID": "ST0007",
        "date": "2025-11-03",
        "status": "scheduled",
        "startTime": "06:00",
        "endTime": "18:00",
        "surgeries": [{ "surgeryId": "S0013", "scheduledTime": "08:00" }]
      },
      {
        "staffID": "ST0008",
        "date": "2011-12-01",
        "status": "completed",
        "startTime": "07:00",
        "endTime": "19:00",
        "surgeries": [{ "surgeryId": "S0010", "scheduledTime": "09:00" }],
        "clockIn": { "date": "2011-12-01", "time": "07:00" },
        "lunchClockIn": { "date": "2011-12-01", "time": "13:00" },
        "lunchClockOut": { "date": "2011-12-01", "time": "13:30" },
        "clockOut": { "date": "2011-12-01", "time": "19:00" }
      },
      {
        "staffID": "ST0008",
        "date": "2013-03-05",
        "status": "completed",
        "startTime": "12:20",
        "endTime": "00:20",
        "surgeries": [{ "surgeryId": "S0008", "scheduledTime": "14:20" }],
        "clockIn": { "date": "2013-03-05", "time": "12:20" },
        "lunchClockIn": { "date": "2013-03-05", "time": "18:20" },
        "lunchClockOut": { "date": "2013-03-05", "time": "18:50" },
        "clockOut": { "date": "2013-03-06", "time": "00:20" }
      },
      {
        "staffID": "ST0008",
              "date": "2020-01-10",
              "status": "completed",
              "startTime": "12:00",
              "endTime": "00:00",
              "surgeries": [{ "surgeryId": "S0001", "scheduledTime": "14:00" }],
              "clockIn": { "date": "2020-01-10", "time": "12:00" },
              "lunchClockIn": { "date": "2020-01-10", "time": "17:00" },
              "lunchClockOut": { "date": "2020-01-10", "time": "17:30" },
              "clockOut": { "date": "2020-01-11", "time": "00:00" }
            },
      {
        "staffID": "ST0008",
        "date": "2014-08-14",
        "status": "completed",
        "startTime": "09:00",
        "endTime": "21:00",
        "surgeries": [{ "surgeryId": "S0007", "scheduledTime": "11:00" }],
        "clockIn": { "date": "2014-08-14", "time": "09:00" },
        "lunchClockIn": { "date": "2014-08-14", "time": "15:00" },
        "lunchClockOut": { "date": "2014-08-14", "time": "15:30" },
        "clockOut": { "date": "2014-08-14", "time": "21:00" }
      },
      {
        "staffID": "ST0008",
        "date": "2017-07-05",
        "status": "completed",
        "startTime": "11:00",
        "endTime": "23:00",
        "surgeries": [{ "surgeryId": "S0004", "scheduledTime": "13:00" }],
        "clockIn": { "date": "2017-07-05", "time": "11:00" },
        "lunchClockIn": { "date": "2017-07-05", "time": "17:00" },
        "lunchClockOut": { "date": "2017-07-05", "time": "17:30" },
        "clockOut": { "date": "2017-07-05", "time": "23:00" }
      },
      {
        "staffID": "ST0008",
        "date": "2025-11-04",
        "status": "scheduled",
        "startTime": "11:00",
        "endTime": "23:00",
        "surgeries": [{ "surgeryId": "S0014", "scheduledTime": "13:00" }]
      },
      {
        "staffID": "ST0008",
        "date": "2025-11-06",
        "status": "scheduled",
        "startTime": "09:00",
        "endTime": "21:00",
        "surgeries": [{ "surgeryId": "S0016", "scheduledTime": "11:00" }]
      },
      {
        "staffID": "ST0008",
        "date": "2025-11-08",
        "status": "scheduled",
        "startTime": "08:00",
        "endTime": "20:00",
        "surgeries": [{ "surgeryId": "S0018", "scheduledTime": "10:00" }]
      },
      {
        "staffID": "ST0009",
        "date": "2012-06-25",
        "status": "completed",
        "startTime": "14:30",
        "endTime": "02:30",
        "surgeries": [{ "surgeryId": "S0009", "scheduledTime": "16:30" }],
        "clockIn": { "date": "2012-06-25", "time": "14:30" },
        "lunchClockIn": { "date": "2012-06-25", "time": "20:30" },
        "lunchClockOut": { "date": "2012-06-25", "time": "21:00" },
        "clockOut": { "date": "2012-06-26", "time": "02:30" }
      },
      {
        "staffID": "ST0009",
        "date": "2016-02-20",
        "status": "completed",
        "startTime": "13:00",
        "endTime": "01:00",
        "surgeries": [{ "surgeryId": "S0005", "scheduledTime": "15:00" }],
        "clockIn": { "date": "2016-02-20", "time": "13:00" },
        "lunchClockIn": { "date": "2016-02-20", "time": "19:00" },
        "lunchClockOut": { "date": "2016-02-20", "time": "19:30" },
        "clockOut": { "date": "2016-02-21", "time": "01:00" }
      },
      {
        "staffID": "ST0009",
        "date": "2018-11-12",
        "status": "completed",
        "startTime": "08:15",
        "endTime": "20:15",
        "surgeries": [{ "surgeryId": "S0003", "scheduledTime": "10:15" }],
        "clockIn": { "date": "2018-11-12", "time": "08:15" },
        "lunchClockIn": { "date": "2018-11-12", "time": "14:15" },
        "lunchClockOut": { "date": "2018-11-12", "time": "14:45" },
        "clockOut": { "date": "2018-11-12", "time": "20:15" }
      },
      {
        "staffID": "ST0009",
        "date": "2019-05-22",
        "status": "completed",
        "startTime": "07:30",
        "endTime": "19:30",
        "surgeries": [{ "surgeryId": "S0002", "scheduledTime": "09:30" }],
        "clockIn": { "date": "2019-05-22", "time": "07:30" },
        "lunchClockIn": { "date": "2019-05-22", "time": "13:30" },
        "lunchClockOut": { "date": "2019-05-22", "time": "14:00" },
        "clockOut": { "date": "2019-05-22", "time": "19:30" }
      },
      {
        "staffID": "ST0009",
        "date": "2025-11-06",
        "status": "scheduled",
        "startTime": "09:00",
        "endTime": "21:00",
        "surgeries": [{ "surgeryId": "S0016", "scheduledTime": "11:00" }]
      },
      {
        "staffID": "ST0009",
        "date": "2025-11-03",
        "status": "scheduled",
        "startTime": "06:00",
        "endTime": "18:00",
        "surgeries": [{ "surgeryId": "S0013", "scheduledTime": "08:00" }]
      },

      
      {
        "staffID": "ST0010",
        "date": "2011-12-01",
        "status": "completed",
        "startTime": "07:00",
        "endTime": "19:00",
        "surgeries": [{ "surgeryId": "S0010", "scheduledTime": "09:00" }],
        "clockIn": { "date": "2011-12-01", "time": "07:00" },
        "lunchClockIn": { "date": "2011-12-01", "time": "13:00" },
        "lunchClockOut": { "date": "2011-12-01", "time": "13:30" },
        "clockOut": { "date": "2011-12-01", "time": "19:00" }
      },
      {
        "staffID": "ST0010",
        "date": "2014-08-14",
        "status": "completed",
        "startTime": "09:00",
        "endTime": "21:00",
        "surgeries": [{ "surgeryId": "S0007", "scheduledTime": "11:00" }],
        "clockIn": { "date": "2014-08-14", "time": "09:00" },
        "lunchClockIn": { "date": "2014-08-14", "time": "15:00" },
        "lunchClockOut": { "date": "2014-08-14", "time": "15:30" },
        "clockOut": { "date": "2014-08-14", "time": "21:00" }
      },
      {
        "staffID": "ST0010",
        "date": "2017-07-05",
        "status": "completed",
        "startTime": "11:00",
        "endTime": "23:00",
        "surgeries": [{ "surgeryId": "S0004", "scheduledTime": "13:00" }],
        "clockIn": { "date": "2017-07-05", "time": "11:00" },
        "lunchClockIn": { "date": "2017-07-05", "time": "17:00" },
        "lunchClockOut": { "date": "2017-07-05", "time": "17:30" },
        "clockOut": { "date": "2017-07-05", "time": "23:00" }
      },
      {
        "staffID": "ST0010",
        "date": "2020-01-10",
        "status": "completed",
        "startTime": "12:00",
        "endTime": "00:00",
        "surgeries": [{ "surgeryId": "S0001", "scheduledTime": "14:00" }],
        "clockIn": { "date": "2020-01-10", "time": "12:00" },
        "lunchClockIn": { "date": "2020-01-10", "time": "18:00" },
        "lunchClockOut": { "date": "2020-01-10", "time": "18:30" },
        "clockOut": { "date": "2020-01-11", "time": "00:00" }
      },
      {
        "staffID": "ST0010",
        "date": "2025-11-08",
        "status": "scheduled",
        "startTime": "08:00",
        "endTime": "20:00",
        "surgeries": [{ "surgeryId": "S0018", "scheduledTime": "10:00" }]
      },
      {
        "staffID": "ST0010",
        "date": "2025-11-10",
        "status": "scheduled",
        "startTime": "13:00",
        "endTime": "01:00",
        "surgeries": [{ "surgeryId": "S0020", "scheduledTime": "15:00" }]
      },

      {
        "staffID": "ST0003",
        "date": "2025-11-03",
        "status": "scheduled",
        "startTime": "08:00",
        "endTime": "20:00",
        "surgeries": [{ "surgeryId": "S0021", "scheduledTime": "08:00" },
                      { "surgeryId": "S0022", "scheduledTime": "12:00" },
                      { "surgeryId": "S0023", "scheduledTime": "16:00" }]
      },
{
      "staffID": "ST0005",
      "date": "2025-11-03",
      "status": "scheduled",
      "startTime": "08:00",
      "endTime": "20:00",
      "surgeries": [{ "surgeryId": "S0021", "scheduledTime": "08:00" },
                    { "surgeryId": "S0022", "scheduledTime": "12:00" },
                    { "surgeryId": "S0023", "scheduledTime": "16:00" }]
    },
{ 
    "staffID": "ST0007",
    "date": "2025-11-03",
    "status": "scheduled",
    "startTime": "08:00",
    "endTime": "20:00",
    "surgeries": [{ "surgeryId": "S0021", "scheduledTime": "08:00" },
                  { "surgeryId": "S0022", "scheduledTime": "12:00" },
                  { "surgeryId": "S0023", "scheduledTime": "16:00" }]
  },
{
  "staffID": "ST0010",
  "date": "2025-11-03",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "20:00",
  "surgeries": [{ "surgeryId": "S0021", "scheduledTime": "08:00" },
                { "surgeryId": "S0022", "scheduledTime": "12:00" },
                { "surgeryId": "S0023", "scheduledTime": "16:00" }]
},
{
  "staffID": "ST0001",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0024", "scheduledTime": "09:00" }]
},
{
  "staffID": "ST0002",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0025", "scheduledTime": "09:30" }]
},
{
  "staffID": "ST0003",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0026", "scheduledTime": "10:00" }]
},
{
  "staffID": "ST0004",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0027", "scheduledTime": "10:30" }]
},
{
  "staffID": "ST0005",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0028", "scheduledTime": "11:00" }]
},
{
  "staffID": "ST0006",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0029", "scheduledTime": "11:30" }]
},
{
  "staffID": "ST0007",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0030", "scheduledTime": "12:00" }]
},
{
  "staffID": "ST0008",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0031", "scheduledTime": "12:30" }]
},
{
  "staffID": "ST0009",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0032", "scheduledTime": "13:00" }]
},
{
  "staffID": "ST0010",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0033", "scheduledTime": "13:30" }]
},
{
  "staffID": "ST0011",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0034", "scheduledTime": "14:00" }]
},
{
  "staffID": "ST0012",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0035", "scheduledTime": "14:30" }]
},
{
  "staffID": "ST0013",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0036", "scheduledTime": "15:00" }]
},
{
  "staffID": "ST0014",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0037", "scheduledTime": "15:30" }]
},
{
  "staffID": "ST0015",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0038", "scheduledTime": "16:00" }]
},
{
  "staffID": "ST0016",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0039", "scheduledTime": "16:30" }]
},
{
  "staffID": "ST0017",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0040", "scheduledTime": "17:00" }]
},
{
  "staffID": "ST0018",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0041", "scheduledTime": "17:30" }]
},
{
  "staffID": "ST0019",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0042", "scheduledTime": "18:00" }]
},
{
  "staffID": "ST0020",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0043", "scheduledTime": "18:30" }]
},
{
  "staffID": "ST0021",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0044", "scheduledTime": "19:00" }]
},
{
  "staffID": "ST0022",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0045", "scheduledTime": "19:30" }]
},
{
  "staffID": "ST0023",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0046", "scheduledTime": "20:00" }]
},
{
  "staffID": "ST0024",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0047", "scheduledTime": "20:30" }]
},
{
  "staffID": "ST0025",
  "date": "2025-11-25",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0048", "scheduledTime": "21:00" }]
},
{
  "staffID": "ST0026",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0049", "scheduledTime": "09:00" }]
},
{
  "staffID": "ST0027",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0050", "scheduledTime": "09:30" }]
},
{
  "staffID": "ST0028",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0051", "scheduledTime": "10:00" }]
},
{
  "staffID": "ST0029",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0052", "scheduledTime": "10:30" }]
},
{
  "staffID": "ST0030",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0053", "scheduledTime": "11:00" }]
},
{
  "staffID": "ST0031",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0054", "scheduledTime": "11:30" }]
},
{
  "staffID": "ST0032",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0055", "scheduledTime": "12:00" }]
},
{
  "staffID": "ST0033",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0056", "scheduledTime": "12:30" }]
},
{
  "staffID": "ST0034",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0057", "scheduledTime": "13:00" }]
},
{
  "staffID": "ST0035",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0058", "scheduledTime": "13:30" }]
},
{
  "staffID": "ST0036",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0059", "scheduledTime": "14:00" }]
},
{
  "staffID": "ST0037",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0060", "scheduledTime": "14:30" }]
},
{
  "staffID": "ST0038",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0061", "scheduledTime": "15:00" }]
},
{
  "staffID": "ST0039",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0062", "scheduledTime": "15:30" }]
},
{
  "staffID": "ST0040",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0063", "scheduledTime": "16:00" }]
},
{
  "staffID": "ST0041",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0064", "scheduledTime": "16:30" }]
},
{
  "staffID": "ST0042",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0065", "scheduledTime": "17:00" }]
},
{
  "staffID": "ST0043",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0066", "scheduledTime": "17:30" }]
},
{
  "staffID": "ST0044",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0067", "scheduledTime": "18:00" }]
},
{
  "staffID": "ST0045",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0068", "scheduledTime": "18:30" }]
},
{
  "staffID": "ST0046",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0069", "scheduledTime": "19:00" }]
},
{
  "staffID": "ST0047",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0070", "scheduledTime": "19:30" }]
},
{
  "staffID": "ST0048",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0071", "scheduledTime": "20:00" }]
},
{
  "staffID": "ST0049",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0072", "scheduledTime": "20:30" }]
},
{
  "staffID": "ST0050",
  "date": "2025-11-26",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0073", "scheduledTime": "21:00" }]
},
{
  "staffID": "ST0051",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0074", "scheduledTime": "08:00" }]
},
{
  "staffID": "ST0052",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0075", "scheduledTime": "08:30" }]
},
{
  "staffID": "ST0053",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0076", "scheduledTime": "09:00" }]
},
{
  "staffID": "ST0054",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0077", "scheduledTime": "09:30" }]
},
{
  "staffID": "ST0055",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0078", "scheduledTime": "10:00" }]
},
{
  "staffID": "ST0056",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0079", "scheduledTime": "10:30" }]
},
{
  "staffID": "ST0057",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0080", "scheduledTime": "11:00" }]
},
{
  "staffID": "ST0058",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0081", "scheduledTime": "11:30" }]
},
{
  "staffID": "ST0059",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0082", "scheduledTime": "12:00" }]
},
{
  "staffID": "ST0060",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0083", "scheduledTime": "12:30" }]
},
{
  "staffID": "ST0061",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0084", "scheduledTime": "13:00" }]
},
{
  "staffID": "ST0062",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0085", "scheduledTime": "13:30" }]
},
{
  "staffID": "ST0063",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0086", "scheduledTime": "14:00" }]
},
{
  "staffID": "ST0064",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0087", "scheduledTime": "14:30" }]
},
{
  "staffID": "ST0065",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0088", "scheduledTime": "15:00" }]
},
{
  "staffID": "ST0066",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0089", "scheduledTime": "15:30" }]
},
{
  "staffID": "ST0067",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0090", "scheduledTime": "16:00" }]
},
{
  "staffID": "ST0068",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0091", "scheduledTime": "16:30" }]
},
{
  "staffID": "ST0069",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0092", "scheduledTime": "17:00" }]
},
{
  "staffID": "ST0070",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0093", "scheduledTime": "17:30" }]
},
{
  "staffID": "ST0071",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0094", "scheduledTime": "18:00" }]
},
{
  "staffID": "ST0072",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0095", "scheduledTime": "18:30" }]
},
{
  "staffID": "ST0073",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0096", "scheduledTime": "19:00" }]
},
{
  "staffID": "ST0074",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0097", "scheduledTime": "19:30" }]
},
{
  "staffID": "ST0075",
  "date": "2025-11-27",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0098", "scheduledTime": "20:00" }]
},
{
  "staffID": "ST0076",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0099", "scheduledTime": "08:00" }]
},
{
  "staffID": "ST0077",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0100", "scheduledTime": "08:30" }]
},
{
  "staffID": "ST0078",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0101", "scheduledTime": "09:00" }]
},
{
  "staffID": "ST0079",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0102", "scheduledTime": "09:30" }]
},
{
  "staffID": "ST0080",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0103", "scheduledTime": "10:00" }]
},
{
  "staffID": "ST0081",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0104", "scheduledTime": "10:30" }]
},
{
  "staffID": "ST0082",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0105", "scheduledTime": "11:00" }]
},
{
  "staffID": "ST0083",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0106", "scheduledTime": "11:30" }]
},
{
  "staffID": "ST0084",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0107", "scheduledTime": "12:00" }]
},
{
  "staffID": "ST0085",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0108", "scheduledTime": "12:30" }]
},
{
  "staffID": "ST0086",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0109", "scheduledTime": "13:00" }]
},
{
  "staffID": "ST0087",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0110", "scheduledTime": "13:30" }]
},
{
  "staffID": "ST0088",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0111", "scheduledTime": "14:00" }]
},
{
  "staffID": "ST0089",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0112", "scheduledTime": "14:30" }]
},
{
  "staffID": "ST0090",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0113", "scheduledTime": "15:00" }]
},
{
  "staffID": "ST0091",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0114", "scheduledTime": "15:30" }]
},
{
  "staffID": "ST0092",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0115", "scheduledTime": "16:00" }]
},
{
  "staffID": "ST0093",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0116", "scheduledTime": "16:30" }]
},
{
  "staffID": "ST0094",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0117", "scheduledTime": "17:00" }]
},
{
  "staffID": "ST0095",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0118", "scheduledTime": "17:30" }]
},
{
  "staffID": "ST0096",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0119", "scheduledTime": "18:00" }]
},
{
  "staffID": "ST0097",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0120", "scheduledTime": "18:30" }]
},
{
  "staffID": "ST0098",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0121", "scheduledTime": "19:00" }]
},
{
  "staffID": "ST0099",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0122", "scheduledTime": "19:30" }]
},
{
  "staffID": "ST0100",
  "date": "2025-11-28",
  "status": "scheduled",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [{ "surgeryID": "S0123", "scheduledTime": "20:00" }]
},
{
  "staffID": "ST0017",
  "date": "2024-10-11",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0124", "scheduledTime": "09:00" }
  ],
  "clockIn": { "date": "2024-10-11", "time": "07:55" },
  "lunchClockIn": { "date": "2024-10-11", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-11", "time": "12:30" },
  "clockOut": { "date": "2024-10-11", "time": "16:05" }
},
{
  "staffID": "ST0203",
  "date": "2024-10-12",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0125", "scheduledTime": "10:15" }
  ],
  "clockIn": { "date": "2024-10-12", "time": "08:02" },
  "lunchClockIn": { "date": "2024-10-12", "time": "12:10" },
  "lunchClockOut": { "date": "2024-10-12", "time": "12:40" },
  "clockOut": { "date": "2024-10-12", "time": "16:01" }
},
{
  "staffID": "ST0094",
  "date": "2024-10-13",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0126", "scheduledTime": "11:00" }
  ],
  "clockIn": { "date": "2024-10-13", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-13", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-13", "time": "12:35" },
  "clockOut": { "date": "2024-10-13", "time": "15:02" }
},
{
  "staffID": "ST0031",
  "date": "2024-10-14",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0127", "scheduledTime": "13:30" }
  ],
  "clockIn": { "date": "2024-10-14", "time": "07:57" },
  "lunchClockIn": { "date": "2024-10-14", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-14", "time": "12:30" },
  "clockOut": { "date": "2024-10-14", "time": "16:06" }
},
{
  "staffID": "ST0122",
  "date": "2024-10-15",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0128", "scheduledTime": "09:45" }
  ],
  "clockIn": { "date": "2024-10-15", "time": "06:50" },
  "lunchClockIn": { "date": "2024-10-15", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-15", "time": "12:40" },
  "clockOut": { "date": "2024-10-15", "time": "15:05" }
},
{
  "staffID": "ST0156",
  "date": "2024-10-16",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0129", "scheduledTime": "14:00" }
  ],
  "clockIn": { "date": "2024-10-16", "time": "08:50" },
  "lunchClockIn": { "date": "2024-10-16", "time": "12:30" },
  "lunchClockOut": { "date": "2024-10-16", "time": "13:00" },
  "clockOut": { "date": "2024-10-16", "time": "17:02" }
},
{
  "staffID": "ST0049",
  "date": "2024-10-17",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0130", "scheduledTime": "11:15" }
  ],
  "clockIn": { "date": "2024-10-17", "time": "07:56" },
  "lunchClockIn": { "date": "2024-10-17", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-17", "time": "12:35" },
  "clockOut": { "date": "2024-10-17", "time": "16:04" }
},
{
  "staffID": "ST0210",
  "date": "2024-10-18",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0131", "scheduledTime": "08:30" }
  ],
  "clockIn": { "date": "2024-10-18", "time": "05:58" },
  "lunchClockIn": { "date": "2024-10-18", "time": "11:30" },
  "lunchClockOut": { "date": "2024-10-18", "time": "12:00" },
  "clockOut": { "date": "2024-10-18", "time": "14:03" }
},
{
  "staffID": "ST0168",
  "date": "2024-10-19",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0132", "scheduledTime": "10:45" }
  ],
  "clockIn": { "date": "2024-10-19", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-19", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-19", "time": "12:35" },
  "clockOut": { "date": "2024-10-19", "time": "15:01" }
},
{
  "staffID": "ST0063",
  "date": "2024-10-20",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0133", "scheduledTime": "12:00" }
  ],
  "clockIn": { "date": "2024-10-20", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-20", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-20", "time": "12:35" },
  "clockOut": { "date": "2024-10-20", "time": "16:03" }
},

{
  "staffID": "ST0025",
  "date": "2024-10-21",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0134", "scheduledTime": "09:45" }
  ],
  "clockIn": { "date": "2024-10-21", "time": "07:55" },
  "lunchClockIn": { "date": "2024-10-21", "time": "12:10" },
  "lunchClockOut": { "date": "2024-10-21", "time": "12:40" },
  "clockOut": { "date": "2024-10-21", "time": "16:00" }
},
{
  "staffID": "ST0184",
  "date": "2024-10-22",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0135", "scheduledTime": "14:15" }
  ],
  "clockIn": { "date": "2024-10-22", "time": "06:58" },
  "lunchClockIn": { "date": "2024-10-22", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-22", "time": "12:30" },
  "clockOut": { "date": "2024-10-22", "time": "15:04" }
},
{
  "staffID": "ST0076",
  "date": "2024-10-23",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0136", "scheduledTime": "11:00" }
  ],
  "clockIn": { "date": "2024-10-23", "time": "08:53" },
  "lunchClockIn": { "date": "2024-10-23", "time": "12:30" },
  "lunchClockOut": { "date": "2024-10-23", "time": "13:00" },
  "clockOut": { "date": "2024-10-23", "time": "17:03" }
},
{
  "staffID": "ST0149",
  "date": "2024-10-24",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0137", "scheduledTime": "08:30" }
  ],
  "clockIn": { "date": "2024-10-24", "time": "07:52" },
  "lunchClockIn": { "date": "2024-10-24", "time": "12:15" },
  "lunchClockOut": { "date": "2024-10-24", "time": "12:45" },
  "clockOut": { "date": "2024-10-24", "time": "16:04" }
},
{
  "staffID": "ST0038",
  "date": "2024-10-25",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0138", "scheduledTime": "10:00" }
  ],
  "clockIn": { "date": "2024-10-25", "time": "06:57" },
  "lunchClockIn": { "date": "2024-10-25", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-25", "time": "12:35" },
  "clockOut": { "date": "2024-10-25", "time": "15:02" }
},
{
  "staffID": "ST0127",
  "date": "2024-10-26",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0139", "scheduledTime": "15:00" }
  ],
  "clockIn": { "date": "2024-10-26", "time": "08:58" },
  "lunchClockIn": { "date": "2024-10-26", "time": "12:45" },
  "lunchClockOut": { "date": "2024-10-26", "time": "13:15" },
  "clockOut": { "date": "2024-10-26", "time": "17:04" }
},
{
  "staffID": "ST0201",
  "date": "2024-10-27",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0140", "scheduledTime": "09:30" }
  ],
  "clockIn": { "date": "2024-10-27", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-27", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-27", "time": "12:35" },
  "clockOut": { "date": "2024-10-27", "time": "16:01" }
},
{
  "staffID": "ST0230",
  "date": "2024-10-28",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0141", "scheduledTime": "12:30" }
  ],
  "clockIn": { "date": "2024-10-28", "time": "05:58" },
  "lunchClockIn": { "date": "2024-10-28", "time": "11:40" },
  "lunchClockOut": { "date": "2024-10-28", "time": "12:10" },
  "clockOut": { "date": "2024-10-28", "time": "14:04" }
},
{
  "staffID": "ST0010",
  "date": "2024-10-29",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0142", "scheduledTime": "07:30" }
  ],
  "clockIn": { "date": "2024-10-29", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-29", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-29", "time": "12:40" },
  "clockOut": { "date": "2024-10-29", "time": "15:02" }
},
{
  "staffID": "ST0193",
  "date": "2024-10-30",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0143", "scheduledTime": "10:45" }
  ],
  "clockIn": { "date": "2024-10-30", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-30", "time": "12:15" },
  "lunchClockOut": { "date": "2024-10-30", "time": "12:45" },
  "clockOut": { "date": "2024-10-30", "time": "16:03" }
},
{
  "staffID": "ST0119",
  "date": "2024-10-31",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0144", "scheduledTime": "13:00" }
  ],
  "clockIn": { "date": "2024-10-31", "time": "08:55" },
  "lunchClockIn": { "date": "2024-10-31", "time": "12:45" },
  "lunchClockOut": { "date": "2024-10-31", "time": "13:15" },
  "clockOut": { "date": "2024-10-31", "time": "17:04" }
},
{
  "staffID": "ST0042",
  "date": "2024-11-01",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0145", "scheduledTime": "11:00" }
  ],
  "clockIn": { "date": "2024-11-01", "time": "05:57" },
  "lunchClockIn": { "date": "2024-11-01", "time": "11:30" },
  "lunchClockOut": { "date": "2024-11-01", "time": "12:00" },
  "clockOut": { "date": "2024-11-01", "time": "14:01" }
},
{
  "staffID": "ST0180",
  "date": "2024-11-02",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0146", "scheduledTime": "09:30" }
  ],
  "clockIn": { "date": "2024-11-02", "time": "06:56" },
  "lunchClockIn": { "date": "2024-11-02", "time": "12:10" },
  "lunchClockOut": { "date": "2024-11-02", "time": "12:40" },
  "clockOut": { "date": "2024-11-02", "time": "15:03" }
},
{
  "staffID": "ST0035",
  "date": "2024-11-03",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0147", "scheduledTime": "15:00" }
  ],
  "clockIn": { "date": "2024-11-03", "time": "07:58" },
  "lunchClockIn": { "date": "2024-11-03", "time": "12:20" },
  "lunchClockOut": { "date": "2024-11-03", "time": "12:50" },
  "clockOut": { "date": "2024-11-03", "time": "16:06" }
},
{
  "staffID": "ST0226",
  "date": "2024-11-04",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0148", "scheduledTime": "08:45" }
  ],
  "clockIn": { "date": "2024-11-04", "time": "08:55" },
  "lunchClockIn": { "date": "2024-11-04", "time": "12:30" },
  "lunchClockOut": { "date": "2024-11-04", "time": "13:00" },
  "clockOut": { "date": "2024-11-04", "time": "17:01" }
},
{
  "staffID": "ST0104",
  "date": "2024-09-01",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0149", "scheduledTime": "10:30" }
  ],
  "clockIn": { "date": "2024-09-01", "time": "07:58" },
  "lunchClockIn": { "date": "2024-09-01", "time": "12:10" },
  "lunchClockOut": { "date": "2024-09-01", "time": "12:40" },
  "clockOut": { "date": "2024-09-01", "time": "16:04" }
},
{
  "staffID": "ST0029",
  "date": "2024-09-02",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0150", "scheduledTime": "09:15" }
  ],
  "clockIn": { "date": "2024-09-02", "time": "06:55" },
  "lunchClockIn": { "date": "2024-09-02", "time": "12:00" },
  "lunchClockOut": { "date": "2024-09-02", "time": "12:35" },
  "clockOut": { "date": "2024-09-02", "time": "15:02" }
},
{
  "staffID": "ST0140",
  "date": "2024-09-03",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0151", "scheduledTime": "14:00" }
  ],
  "clockIn": { "date": "2024-09-03", "time": "08:55" },
  "lunchClockIn": { "date": "2024-09-03", "time": "12:35" },
  "lunchClockOut": { "date": "2024-09-03", "time": "13:10" },
  "clockOut": { "date": "2024-09-03", "time": "17:01" }
},
{
  "staffID": "ST0067",
  "date": "2024-09-04",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0152", "scheduledTime": "08:45" }
  ],
  "clockIn": { "date": "2024-09-04", "time": "05:57" },
  "lunchClockIn": { "date": "2024-09-04", "time": "11:30" },
  "lunchClockOut": { "date": "2024-09-04", "time": "12:00" },
  "clockOut": { "date": "2024-09-04", "time": "14:05" }
},
{
  "staffID": "ST0172",
  "date": "2024-09-05",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0153", "scheduledTime": "11:30" }
  ],
  "clockIn": { "date": "2024-09-05", "time": "06:52" },
  "lunchClockIn": { "date": "2024-09-05", "time": "12:00" },
  "lunchClockOut": { "date": "2024-09-05", "time": "12:40" },
  "clockOut": { "date": "2024-09-05", "time": "15:03" }
},
{
  "staffID": "ST0033",
  "date": "2024-09-06",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0154", "scheduledTime": "07:45" }
  ],
  "clockIn": { "date": "2024-09-06", "time": "07:57" },
  "lunchClockIn": { "date": "2024-09-06", "time": "12:20" },
  "lunchClockOut": { "date": "2024-09-06", "time": "12:50" },
  "clockOut": { "date": "2024-09-06", "time": "16:06" }
},
{
  "staffID": "ST0205",
  "date": "2024-09-07",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0155", "scheduledTime": "10:30" }
  ],
  "clockIn": { "date": "2024-09-07", "time": "08:59" },
  "lunchClockIn": { "date": "2024-09-07", "time": "12:40" },
  "lunchClockOut": { "date": "2024-09-07", "time": "13:10" },
  "clockOut": { "date": "2024-09-07", "time": "17:04" }
},
{
  "staffID": "ST0099",
  "date": "2024-09-08",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0156", "scheduledTime": "12:00" }
  ],
  "clockIn": { "date": "2024-09-08", "time": "05:55" },
  "lunchClockIn": { "date": "2024-09-08", "time": "11:20" },
  "lunchClockOut": { "date": "2024-09-08", "time": "11:50" },
  "clockOut": { "date": "2024-09-08", "time": "14:01" }
},
{
  "staffID": "ST0113",
  "date": "2024-09-09",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0157", "scheduledTime": "09:00" }
  ],
  "clockIn": { "date": "2024-09-09", "time": "06:57" },
  "lunchClockIn": { "date": "2024-09-09", "time": "12:15" },
  "lunchClockOut": { "date": "2024-09-09", "time": "12:45" },
  "clockOut": { "date": "2024-09-09", "time": "15:02" }
},
{
  "staffID": "ST0222",
  "date": "2024-09-10",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0158", "scheduledTime": "14:45" }
  ],
  "clockIn": { "date": "2024-09-10", "time": "07:58" },
  "lunchClockIn": { "date": "2024-09-10", "time": "12:20" },
  "lunchClockOut": { "date": "2024-09-10", "time": "12:50" },
  "clockOut": { "date": "2024-09-10", "time": "16:04" }
},

{
  "staffID": "ST0088",
  "date": "2024-09-11",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0159", "scheduledTime": "08:00" }
  ],
  "clockIn": { "date": "2024-09-11", "time": "08:55" },
  "lunchClockIn": { "date": "2024-09-11", "time": "12:40" },
  "lunchClockOut": { "date": "2024-09-11", "time": "13:15" },
  "clockOut": { "date": "2024-09-11", "time": "17:01" }
},
{
  "staffID": "ST0162",
  "date": "2024-09-12",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0160", "scheduledTime": "07:30" }
  ],
  "clockIn": { "date": "2024-09-12", "time": "05:56" },
  "lunchClockIn": { "date": "2024-09-12", "time": "11:20" },
  "lunchClockOut": { "date": "2024-09-12", "time": "11:50" },
  "clockOut": { "date": "2024-09-12", "time": "14:03" }
},
{
  "staffID": "ST0048",
  "date": "2024-09-13",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0161", "scheduledTime": "13:00" }
  ],
  "clockIn": { "date": "2024-09-13", "time": "06:55" },
  "lunchClockIn": { "date": "2024-09-13", "time": "12:05" },
  "lunchClockOut": { "date": "2024-09-13", "time": "12:40" },
  "clockOut": { "date": "2024-09-13", "time": "15:00" }
},
{
  "staffID": "ST0181",
  "date": "2024-09-14",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0162", "scheduledTime": "11:15" }
  ],
  "clockIn": { "date": "2024-09-14", "time": "07:59" },
  "lunchClockIn": { "date": "2024-09-14", "time": "12:20" },
  "lunchClockOut": { "date": "2024-09-14", "time": "12:50" },
  "clockOut": { "date": "2024-09-14", "time": "16:05" }
},
{
  "staffID": "ST0020",
  "date": "2024-09-15",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0163", "scheduledTime": "16:00" }
  ],
  "clockIn": { "date": "2024-09-15", "time": "08:58" },
  "lunchClockIn": { "date": "2024-09-15", "time": "12:45" },
  "lunchClockOut": { "date": "2024-09-15", "time": "13:15" },
  "clockOut": { "date": "2024-09-15", "time": "17:04" }
},
{
  "staffID": "ST0217",
  "date": "2024-09-16",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0164", "scheduledTime": "09:30" }
  ],
  "clockIn": { "date": "2024-09-16", "time": "05:58" },
  "lunchClockIn": { "date": "2024-09-16", "time": "11:25" },
  "lunchClockOut": { "date": "2024-09-16", "time": "11:55" },
  "clockOut": { "date": "2024-09-16", "time": "14:01" }
},
{
  "staffID": "ST0072",
  "date": "2024-09-17",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0165", "scheduledTime": "14:00" }
  ],
  "clockIn": { "date": "2024-09-17", "time": "06:56" },
  "lunchClockIn": { "date": "2024-09-17", "time": "12:15" },
  "lunchClockOut": { "date": "2024-09-17", "time": "12:45" },
  "clockOut": { "date": "2024-09-17", "time": "15:04" }
},
{
  "staffID": "ST0159",
  "date": "2024-09-18",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0166", "scheduledTime": "09:00" }
  ],
  "clockIn": { "date": "2024-09-18", "time": "07:59" },
  "lunchClockIn": { "date": "2024-09-18", "time": "12:10" },
  "lunchClockOut": { "date": "2024-09-18", "time": "12:40" },
  "clockOut": { "date": "2024-09-18", "time": "16:03" }
},
{
  "staffID": "ST0051",
  "date": "2024-09-19",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0167", "scheduledTime": "12:30" }
  ],
  "clockIn": { "date": "2024-09-19", "time": "05:56" },
  "lunchClockIn": { "date": "2024-09-19", "time": "11:35" },
  "lunchClockOut": { "date": "2024-09-19", "time": "12:05" },
  "clockOut": { "date": "2024-09-19", "time": "14:02" }
},
{
  "staffID": "ST0138",
  "date": "2024-09-20",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0168", "scheduledTime": "08:50" }
  ],
  "clockIn": { "date": "2024-09-20", "time": "06:55" },
  "lunchClockIn": { "date": "2024-09-20", "time": "12:10" },
  "lunchClockOut": { "date": "2024-09-20", "time": "12:40" },
  "clockOut": { "date": "2024-09-20", "time": "15:03" }
},
{
  "staffID": "ST0196",
  "date": "2024-09-21",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0169", "scheduledTime": "10:15" }
  ],
  "clockIn": { "date": "2024-09-21", "time": "08:57" },
  "lunchClockIn": { "date": "2024-09-21", "time": "12:40" },
  "lunchClockOut": { "date": "2024-09-21", "time": "13:10" },
  "clockOut": { "date": "2024-09-21", "time": "17:05" }
},
{
  "staffID": "ST0014",
  "date": "2024-09-22",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0170", "scheduledTime": "13:00" }
  ],
  "clockIn": { "date": "2024-09-22", "time": "05:57" },
  "lunchClockIn": { "date": "2024-09-22", "time": "11:30" },
  "lunchClockOut": { "date": "2024-09-22", "time": "12:00" },
  "clockOut": { "date": "2024-09-22", "time": "14:02" }
},
{
  "staffID": "ST0230",
  "date": "2024-09-23",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0171", "scheduledTime": "09:45" }
  ],
  "clockIn": { "date": "2024-09-23", "time": "06:55" },
  "lunchClockIn": { "date": "2024-09-23", "time": "12:10" },
  "lunchClockOut": { "date": "2024-09-23", "time": "12:45" },
  "clockOut": { "date": "2024-09-23", "time": "15:00" }
},
{
  "staffID": "ST0108",
  "date": "2024-09-24",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0172", "scheduledTime": "11:30" }
  ],
  "clockIn": { "date": "2024-09-24", "time": "07:58" },
  "lunchClockIn": { "date": "2024-09-24", "time": "12:15" },
  "lunchClockOut": { "date": "2024-09-24", "time": "12:50" },
  "clockOut": { "date": "2024-09-24", "time": "16:02" }
},
{
  "staffID": "ST0060",
  "date": "2024-09-25",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0173", "scheduledTime": "13:15" }
  ],
  "clockIn": { "date": "2024-09-25", "time": "08:54" },
  "lunchClockIn": { "date": "2024-09-25", "time": "12:40" },
  "lunchClockOut": { "date": "2024-09-25", "time": "13:10" },
  "clockOut": { "date": "2024-09-25", "time": "17:03" }
},
{
  "staffID": "ST0144",
  "date": "2024-09-26",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0174", "scheduledTime": "10:45" }
  ],
  "clockIn": { "date": "2024-09-26", "time": "06:55" },
  "lunchClockIn": { "date": "2024-09-26", "time": "12:20" },
  "lunchClockOut": { "date": "2024-09-26", "time": "12:50" },
  "clockOut": { "date": "2024-09-26", "time": "15:02" }
},
{
  "staffID": "ST0037",
  "date": "2024-09-27",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0175", "scheduledTime": "09:00" }
  ],
  "clockIn": { "date": "2024-09-27", "time": "05:57" },
  "lunchClockIn": { "date": "2024-09-27", "time": "11:25" },
  "lunchClockOut": { "date": "2024-09-27", "time": "11:55" },
  "clockOut": { "date": "2024-09-27", "time": "14:01" }
},
{
  "staffID": "ST0208",
  "date": "2024-09-28",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0176", "scheduledTime": "14:00" }
  ],
  "clockIn": { "date": "2024-09-28", "time": "07:59" },
  "lunchClockIn": { "date": "2024-09-28", "time": "12:30" },
  "lunchClockOut": { "date": "2024-09-28", "time": "12:55" },
  "clockOut": { "date": "2024-09-28", "time": "16:04" }
},
{
  "staffID": "ST0101",
  "date": "2024-09-29",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0177", "scheduledTime": "11:30" }
  ],
  "clockIn": { "date": "2024-09-29", "time": "08:55" },
  "lunchClockIn": { "date": "2024-09-29", "time": "12:40" },
  "lunchClockOut": { "date": "2024-09-29", "time": "13:15" },
  "clockOut": { "date": "2024-09-29", "time": "17:02" }
},
{
  "staffID": "ST0011",
  "date": "2024-09-30",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0178", "scheduledTime": "07:45" }
  ],
  "clockIn": { "date": "2024-09-30", "time": "05:56" },
  "lunchClockIn": { "date": "2024-09-30", "time": "11:15" },
  "lunchClockOut": { "date": "2024-09-30", "time": "11:45" },
  "clockOut": { "date": "2024-09-30", "time": "14:04" }
},
{
  "staffID": "ST0227",
  "date": "2024-10-01",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0179", "scheduledTime": "13:30" }
  ],
  "clockIn": { "date": "2024-10-01", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-01", "time": "12:10" },
  "lunchClockOut": { "date": "2024-10-01", "time": "12:40" },
  "clockOut": { "date": "2024-10-01", "time": "15:02" }
},
{
  "staffID": "ST0160",
  "date": "2024-10-02",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0180", "scheduledTime": "08:30" }
  ],
  "clockIn": { "date": "2024-10-02", "time": "08:56" },
  "lunchClockIn": { "date": "2024-10-02", "time": "12:45" },
  "lunchClockOut": { "date": "2024-10-02", "time": "13:20" },
  "clockOut": { "date": "2024-10-02", "time": "17:05" }
},
{
  "staffID": "ST0079",
  "date": "2024-10-03",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0181", "scheduledTime": "12:00" }
  ],
  "clockIn": { "date": "2024-10-03", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-03", "time": "12:20" },
  "lunchClockOut": { "date": "2024-10-03", "time": "12:50" },
  "clockOut": { "date": "2024-10-03", "time": "16:03" }
},
{
  "staffID": "ST0125",
  "date": "2024-10-04",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0182", "scheduledTime": "09:45" }
  ],
  "clockIn": { "date": "2024-10-04", "time": "05:57" },
  "lunchClockIn": { "date": "2024-10-04", "time": "11:25" },
  "lunchClockOut": { "date": "2024-10-04", "time": "11:55" },
  "clockOut": { "date": "2024-10-04", "time": "14:01" }
},
{
  "staffID": "ST0043",
  "date": "2024-10-05",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0183", "scheduledTime": "11:00" }
  ],
  "clockIn": { "date": "2024-10-05", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-05", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-05", "time": "12:35" },
  "clockOut": { "date": "2024-10-05", "time": "15:03" }
},

{
  "staffID": "ST0117",
  "date": "2024-10-06",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0184", "scheduledTime": "13:45" }
  ],
  "clockIn": { "date": "2024-10-06", "time": "08:58" },
  "lunchClockIn": { "date": "2024-10-06", "time": "12:50" },
  "lunchClockOut": { "date": "2024-10-06", "time": "13:20" },
  "clockOut": { "date": "2024-10-06", "time": "17:04" }
},
{
  "staffID": "ST0190",
  "date": "2024-10-07",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0185", "scheduledTime": "12:30" }
  ],
  "clockIn": { "date": "2024-10-07", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-07", "time": "12:20" },
  "lunchClockOut": { "date": "2024-10-07", "time": "12:55" },
  "clockOut": { "date": "2024-10-07", "time": "16:05" }
},
{
  "staffID": "ST0086",
  "date": "2024-10-08",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0186", "scheduledTime": "07:20" }
  ],
  "clockIn": { "date": "2024-10-08", "time": "05:55" },
  "lunchClockIn": { "date": "2024-10-08", "time": "11:10" },
  "lunchClockOut": { "date": "2024-10-08", "time": "11:40" },
  "clockOut": { "date": "2024-10-08", "time": "14:00" }
},
{
  "staffID": "ST0031",
  "date": "2024-10-09",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0187", "scheduledTime": "16:00" }
  ],
  "clockIn": { "date": "2024-10-09", "time": "06:56" },
  "lunchClockIn": { "date": "2024-10-09", "time": "12:05" },
  "lunchClockOut": { "date": "2024-10-09", "time": "12:40" },
  "clockOut": { "date": "2024-10-09", "time": "15:01" }
},
{
  "staffID": "ST0202",
  "date": "2024-10-10",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0188", "scheduledTime": "10:00" }
  ],
  "clockIn": { "date": "2024-10-10", "time": "08:59" },
  "lunchClockIn": { "date": "2024-10-10", "time": "12:40" },
  "lunchClockOut": { "date": "2024-10-10", "time": "13:10" },
  "clockOut": { "date": "2024-10-10", "time": "17:04" }
},
{
  "staffID": "ST0054",
  "date": "2024-10-11",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0189", "scheduledTime": "11:15" }
  ],
  "clockIn": { "date": "2024-10-11", "time": "05:56" },
  "lunchClockIn": { "date": "2024-10-11", "time": "11:20" },
  "lunchClockOut": { "date": "2024-10-11", "time": "11:50" },
  "clockOut": { "date": "2024-10-11", "time": "14:03" }
},
{
  "staffID": "ST0184",
  "date": "2024-10-12",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0190", "scheduledTime": "13:40" }
  ],
  "clockIn": { "date": "2024-10-12", "time": "07:57" },
  "lunchClockIn": { "date": "2024-10-12", "time": "12:25" },
  "lunchClockOut": { "date": "2024-10-12", "time": "12:55" },
  "clockOut": { "date": "2024-10-12", "time": "16:03" }
},
{
  "staffID": "ST0091",
  "date": "2024-10-13",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0191", "scheduledTime": "09:10" }
  ],
  "clockIn": { "date": "2024-10-13", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-13", "time": "12:10" },
  "lunchClockOut": { "date": "2024-10-13", "time": "12:45" },
  "clockOut": { "date": "2024-10-13", "time": "15:00" }
},
{
  "staffID": "ST0121",
  "date": "2024-10-14",
  "status": "completed",
  "startTime": "09:00",
  "endTime": "17:00",
  "surgeries": [
    { "surgeryID": "S0192", "scheduledTime": "14:30" }
  ],
  "clockIn": { "date": "2024-10-14", "time": "08:57" },
  "lunchClockIn": { "date": "2024-10-14", "time": "12:50" },
  "lunchClockOut": { "date": "2024-10-14", "time": "13:15" },
  "clockOut": { "date": "2024-10-14", "time": "17:05" }
},
{
  "staffID": "ST0024",
  "date": "2024-10-15",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0193", "scheduledTime": "07:50" }
  ],
  "clockIn": { "date": "2024-10-15", "time": "05:55" },
  "lunchClockIn": { "date": "2024-10-15", "time": "11:10" },
  "lunchClockOut": { "date": "2024-10-15", "time": "11:40" },
  "clockOut": { "date": "2024-10-15", "time": "14:01" }
},
{
  "staffID": "ST0177",
  "date": "2024-10-16",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0194", "scheduledTime": "10:20" }
  ],
  "clockIn": { "date": "2024-10-16", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-16", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-16", "time": "12:35" },
  "clockOut": { "date": "2024-10-16", "time": "15:04" }
},
{
  "staffID": "ST0068",
  "date": "2024-10-17",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0195", "scheduledTime": "12:50" }
  ],
  "clockIn": { "date": "2024-10-17", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-17", "time": "12:15" },
  "lunchClockOut": { "date": "2024-10-17", "time": "12:45" },
  "clockOut": { "date": "2024-10-17", "time": "16:02" }
},
{
  "staffID": "ST0210",
  "date": "2024-10-18",
  "status": "completed",
  "startTime": "06:00",
  "endTime": "14:00",
  "surgeries": [
    { "surgeryID": "S0196", "scheduledTime": "09:10" }
  ],
  "clockIn": { "date": "2024-10-18", "time": "05:56" },
  "lunchClockIn": { "date": "2024-10-18", "time": "11:20" },
  "lunchClockOut": { "date": "2024-10-18", "time": "11:55" },
  "clockOut": { "date": "2024-10-18", "time": "14:04" }
},
{
  "staffID": "ST0049",
  "date": "2024-10-19",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0197", "scheduledTime": "08:30" }
  ],
  "clockIn": { "date": "2024-10-19", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-19", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-19", "time": "12:35" },
  "clockOut": { "date": "2024-10-19", "time": "15:03" }
},
{
  "staffID": "ST0150",
  "date": "2024-10-20",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0198", "scheduledTime": "15:00" }
  ],
  "clockIn": { "date": "2024-10-20", "time": "07:58" },
  "lunchClockIn": { "date": "2024-10-20", "time": "12:30" },
  "lunchClockOut": { "date": "2024-10-20", "time": "13:00" },
  "clockOut": { "date": "2024-10-20", "time": "16:02" }
},
{
  "staffID": "ST0110",
  "date": "2024-10-21",
  "status": "completed",
  "startTime": "07:00",
  "endTime": "15:00",
  "surgeries": [
    { "surgeryID": "S0199", "scheduledTime": "10:30" }
  ],
  "clockIn": { "date": "2024-10-21", "time": "06:55" },
  "lunchClockIn": { "date": "2024-10-21", "time": "12:00" },
  "lunchClockOut": { "date": "2024-10-21", "time": "12:35" },
  "clockOut": { "date": "2024-10-21", "time": "15:04" }
},
{
  "staffID": "ST0040",
  "date": "2024-10-22",
  "status": "completed",
  "startTime": "08:00",
  "endTime": "16:00",
  "surgeries": [
    { "surgeryID": "S0200", "scheduledTime": "14:15" }
  ],
  "clockIn": { "date": "2024-10-22", "time": "07:59" },
  "lunchClockIn": { "date": "2024-10-22", "time": "12:25" },
  "lunchClockOut": { "date": "2024-10-22", "time": "12:55" },
  "clockOut": { "date": "2024-10-22", "time": "16:03" }
},

  {
    "staffID": "ST0058",
    "date": "2024-10-17",
    "status": "completed",
    "startTime": "08:00",
    "endTime": "16:00",
    "surgeries": [
      { "surgeryID": "S0195", "scheduledTime": "12:50" }
    ],
    "clockIn": { "date": "2024-10-17", "time": "07:59" },
    "lunchClockIn": { "date": "2024-10-17", "time": "12:15" },
    "lunchClockOut": { "date": "2024-10-17", "time": "12:45" },
    "clockOut": { "date": "2024-10-17", "time": "16:02" }
  },
  {
    "staffID": "ST0200",
    "date": "2024-10-18",
    "status": "completed",
    "startTime": "06:00",
    "endTime": "14:00",
    "surgeries": [
      { "surgeryID": "S0196", "scheduledTime": "09:10" }
    ],
    "clockIn": { "date": "2024-10-18", "time": "05:56" },
    "lunchClockIn": { "date": "2024-10-18", "time": "11:20" },
    "lunchClockOut": { "date": "2024-10-18", "time": "11:55" },
    "clockOut": { "date": "2024-10-18", "time": "14:04" }
  },
  {
    "staffID": "ST0048",
    "date": "2024-10-19",
    "status": "completed",
    "startTime": "07:00",
    "endTime": "15:00",
    "surgeries": [
      { "surgeryID": "S0197", "scheduledTime": "08:30" }
    ],
    "clockIn": { "date": "2024-10-19", "time": "06:55" },
    "lunchClockIn": { "date": "2024-10-19", "time": "12:00" },
    "lunchClockOut": { "date": "2024-10-19", "time": "12:35" },
    "clockOut": { "date": "2024-10-19", "time": "15:03" }
  },
  {
    "staffID": "ST0110",
    "date": "2024-10-20",
    "status": "completed",
    "startTime": "08:00",
    "endTime": "16:00",
    "surgeries": [
      { "surgeryID": "S0198", "scheduledTime": "15:00" }
    ],
    "clockIn": { "date": "2024-10-20", "time": "07:58" },
    "lunchClockIn": { "date": "2024-10-20", "time": "12:30" },
    "lunchClockOut": { "date": "2024-10-20", "time": "13:00" },
    "clockOut": { "date": "2024-10-20", "time": "16:02" }
  },
  {
    "staffID": "ST0150",
    "date": "2024-10-21",
    "status": "completed",
    "startTime": "07:00",
    "endTime": "15:00",
    "surgeries": [
      { "surgeryID": "S0199", "scheduledTime": "10:30" }
    ],
    "clockIn": { "date": "2024-10-21", "time": "06:55" },
    "lunchClockIn": { "date": "2024-10-21", "time": "12:00" },
    "lunchClockOut": { "date": "2024-10-21", "time": "12:35" },
    "clockOut": { "date": "2024-10-21", "time": "15:04" }
  },
  {
    "staffID": "ST0039",
    "date": "2024-10-22",
    "status": "completed",
    "startTime": "08:00",
    "endTime": "16:00",
    "surgeries": [
      { "surgeryID": "S0200", "scheduledTime": "14:15" }
    ],
    "clockIn": { "date": "2024-10-22", "time": "07:59" },
    "lunchClockIn": { "date": "2024-10-22", "time": "12:25" },
    "lunchClockOut": { "date": "2024-10-22", "time": "12:55" },
    "clockOut": { "date": "2024-10-22", "time": "16:03" }
  }
]);